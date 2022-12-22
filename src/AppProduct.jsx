import React, { useState } from 'react';
import Product from './components/product/Product';

const AppProduct = () => {
  const [showItem, setShowItem] = useState(false);
  return (
    <div>
      <Product showItem={showItem} />
      <button
        className='showBtn'
        onClick={() => setShowItem((showItem) => !showItem)}
      >
        Toggle
      </button>
    </div>
  );
};

export default AppProduct;
