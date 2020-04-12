import React from 'react';
import { Link } from 'react-router-dom';

function ProductRow({ index, product, deleteProduct }) {
  return (
    <tr key={index}>
      <th>{product.Name}</th>
      <th>
        $
        {product.Price}
      </th>
      <th>{product.Category}</th>
      <th>
        <Link to={`/view/${product.id}`}>View</Link>
      </th>
      <th>
        <Link to={`/edit/${product.id}`}>Edit</Link>
        {' | '}
        <button
          type="button"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </button>
      </th>
    </tr>
  );
}

export default ProductRow;
