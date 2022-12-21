import React, { useState } from 'react';
import './Counter.css';

const Counter = ({ total, getTotal }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className='container'>
      <p className='eachCount'>
        {counter} <span className='totCount'>/ {total}</span>
      </p>
      <button
        className='button'
        onClick={() => {
          setCounter((prev) => prev + 1);
          getTotal();
        }}
      >
        Add +
      </button>
    </div>
  );
};

export default Counter;
