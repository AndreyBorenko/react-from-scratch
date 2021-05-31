import ReactDOM from 'react-dom';
import React from 'react';
import Counter from './components/Counter';
const App = () => {
  return <div>
    <h1>This is my React app!</h1>
    <Counter />
  </div>;
}
ReactDOM.render(<App />, document.getElementById('app'));