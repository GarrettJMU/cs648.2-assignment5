import React, { PureComponent } from 'react';

class ProductAdd extends PureComponent {
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

export default ProductAdd;
