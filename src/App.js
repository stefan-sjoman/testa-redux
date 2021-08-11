
import { useState } from 'react';
import './App.css';

function App() {

	const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
				<h1>TESTA REDUX</h1>
      </header>
			<div>
				<div>count: { count }</div>
				<button onClick={ () => setCount(count + 1) }>increase</button>
				<button onClick={ () => setCount(count -1) }>decrease</button>
			</div>
    </div>
  );
}

export default App;
