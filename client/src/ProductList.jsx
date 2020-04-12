import React, { PureComponent } from 'react';
import graphQLFetch from './query';
import ProductTable from './ProductTable.jsx';
import ProductAdd from './ProductAdd.jsx';

class ProductList extends PureComponent {
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

  async deleteProduct(id) {
    const query = `mutation productDelete($id: Int!) {
      productDelete(id: $id)
    }`;

    const data = await graphQLFetch(query, { id });

    if (!data.productDelete) {
      alert('Product deleted unsuccessfully');
      return false;
    }
    alert('Product deleted successfully');
    this.loadData();
    return true;
  }

  render() {
    return (
      <div>
        <ProductTable products={this.state.products} deleteProduct={productId => this.deleteProduct(productId)} />
        <ProductAdd addProduct={product => this.addProduct(product)} />
      </div>
    );
  }
}

export default ProductList;
