import React, { useEffect, useState } from 'react';
import './Product.css';

const Product = ({ showItem }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`data/${showItem ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥🔥🔥 Get data through network', '/', showItem);
        setProducts(data);
      });
    return () => {
      console.log('🧹 working on cleaning', '/', showItem);
    };
  }, [showItem]);

  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default Product;
