import React, { useState } from 'react';
import './Counter.css';

const Counter = ({ setTotal }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className='container'>
      <p className='span'>{counter}</p>
      <button
        className='button'
        onClick={() => {
          setCounter((prev) => prev + 1);
          setTotal((prev) => prev + 1);
        }}
      >
        Add +
      </button>
    </div>
  );
};

export default Counter;
