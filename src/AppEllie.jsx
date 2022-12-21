import { useState } from 'react';
import './App.css';
import Counter from './components/counterEllie/Counter';

function App() {
  const [total, setTotal] = useState(0);

  const handleTotal = () => {
    setTotal((prev) => prev + 1);
  };

  return (
    <div className='App'>
      <p className='totalCount'>
        Total Count: {total} {total > 10 ? '🔥' : '❄️'}
      </p>
      <Counter total={total} getTotal={handleTotal} />
      <Counter total={total} getTotal={handleTotal} />
    </div>
  );
}

export default App;
