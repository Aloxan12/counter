import React from 'react';
import './App.css';
import Counter, {ChangeValue} from "./Counter/Counter";
import CounterLocalstorage from "./CounterLocalstorage/CounterLocalstorage";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
