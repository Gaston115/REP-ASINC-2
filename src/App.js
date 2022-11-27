import './App.css';
import {useState} from 'react';
function App() {
  const [counter, setCounter] = useState(0);
  const handleClick1 = ()=> {
    setCounter(counter + 5)
  }
  const handleClick2 = () =>{
    setCounter(counter - 5)
  }
  return <div>
<button className='button' onClick={handleClick1}>+5</button>
<button className='button' onClick={handleClick2}>-5</button>
<h3>{counter}</h3>
</div>
}

export default App;
