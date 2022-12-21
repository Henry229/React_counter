import { useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className='App'>
      <p className='totalCount'>
        Total Count: {total} {total > 10 ? '🔥' : '❄️'}
      </p>
      <Counter setTotal={setTotal} />
      <Counter setTotal={setTotal} />
    </div>
  );
}

export default App;
