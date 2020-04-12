import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import graphQLFetch from './query.js';

class ProductView extends PureComponent {
  constructor() {
    super();
    this.state = { product: {} };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query Product($id: Int!) {
      Product(id: $id) {
        id Category Name Price Image
      }
    }`;

    const data = await graphQLFetch(query, { id: this.props.match.params.id });
    if (data) {
      this.setState({ product: data.Product });
    } else {
      this.setState({ product: {} });
    }
  }

  render() {
    const { product } = this.state;
    return (
      <div style={{ width: '100vw' }}>
        <Link to="/products" style={{ width: '100vw' }}>Back</Link>
        <img style={{ maxWidth: '80vw' }} src={product.Image} alt={product.Name} />
      </div>
    );
  }
}

export default ProductView;
