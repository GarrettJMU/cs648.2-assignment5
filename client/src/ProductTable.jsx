import React, { Fragment } from 'react';
import ProductRow from './ProductRow.jsx';

function ProductTable({ products }) {
  const selectOptions = ['Product Name', 'Price', 'Category', 'Image'];

  return (
    <Fragment>
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
    </Fragment>
  );
}

export default ProductTable;
