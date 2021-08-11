import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counter';

function App() {

	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch()

  return (
    <div className="App">
      <header>
				<h1>TESTA REDUX</h1>
      </header>
			<div>
				<div>count: { count }</div>
				<button onClick={ () => dispatch(increment()) }>increment</button>
				<button onClick={ () => dispatch(decrement()) }>decrement</button>
				<button onClick={ () => dispatch(incrementByAmount(33)) }>increment by 33</button>
			</div>
    </div>
  );
}

export default App;
