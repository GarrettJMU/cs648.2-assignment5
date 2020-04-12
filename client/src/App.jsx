/* eslint "react/react-in-jsx-scope": "off" */
/* globals React ReactDOM */
/* eslint "react/jsx-no-undef": "off" */

/* eslint "react/no-multi-comp": "off" */


async function graphQLFetch(query, variables = {}) {
  const response = await fetch(window.ENV.UI_API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  const body = await response.text();
  const result = JSON.parse(body);
  return result.data;
}

// eslint-disable-next-line react/prefer-stateless-function
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
      productList {
        id Category Name Price Image
      }
    }`;

    const data = await graphQLFetch(query);

    if (data) this.setState({ products: data.productList });
  }

  async addProduct(product) {
    const query = `mutation productAdd($product: ProductInputs!) {
      productAdd(product: $product) {
        id
      }
    }`;

    const data = await graphQLFetch(query, { product });

    if (data) this.loadData();
  }

  render() {
    return (
      <div>
        <ProductTable products={this.state.products} />
        <ProductAdd addProduct={product => this.addProduct(product)} />
      </div>
    );
  }
}

function ProductTable({ products }) {
  const selectOptions = ['Product Name', 'Price', 'Category', 'Image'];

  return (
    <React.Fragment>
      <h1>My Company Inventory</h1>
      <h2>Showing all available products</h2>
      <hr />
      <table>
        <thead>
          <tr>
            {selectOptions.map(option => <th key={option}>{option}</th>)}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductRow product={product} index={index} key={product.id} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

function ProductRow({ index, product }) {
  return (
    <tr key={index}>
      <th>{product.Name}</th>
      <th>
        $
        {product.Price}
      </th>
      <th>{product.Category}</th>
      <th>
        <a href={product.Image} target="_blank" rel="noopener noreferrer">
          View
        </a>
      </th>
    </tr>
  );
}

class ProductAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      category: '',
      name: '',
      image: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      Name: this.state.name,
      Price: parseInt(this.state.price, 10),
      Category: this.state.category,
      Image: this.state.image,
    };

    this.props.addProduct(product);
    this.setState({
      name: '',
      price: '',
      category: '',
      image: '',
    });
  }

  render() {
    const categoryValues = ['', 'Shirts', 'Jeans', 'Jackets', 'Sweaters', 'Accessories'];
    return (
      <React.Fragment>
        <p>Add a new product to Inventory</p>
        <hr />
        <form>
          Category
          {' '}
          <br />
          <select
            name="category"
            value={this.state.category}
            onChange={e => this.setState({ category: e.target.value })}
          >
            {categoryValues.map(value => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          <br />
          Product Name
          {' '}
          <br />
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <br />
          Price Per Unit
          {' '}
          <br />
          <input
            type="text"
            name="price"
            value={`$${this.state.price}`}
            onChange={e => this.setState({ price: e.target.value.replace(/\$/g, '') })}
          />
          <br />
          Image URL
          {' '}
          <br />
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={e => this.setState({ image: e.target.value })}
          />
          <br />
          <input type="submit" value="Add Product" onClick={e => this.onSubmit(e)} />
        </form>
      </React.Fragment>
    );
  }
}


const element = <ProductList />;
ReactDOM.render(element, document.getElementById('root'));
