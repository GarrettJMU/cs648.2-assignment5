import React from 'react';

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

export default ProductRow;
