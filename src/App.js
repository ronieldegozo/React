import './App.css';
import React, {useState} from 'react';
import Counter from './components/Counter/Counter.component';

const  App =() =>{

const [showCounter,  setCounter] = useState(false);
return(
  <div className='App'>
        <h1>Counter Application using React</h1>
    <button onClick={() => setCounter(!showCounter)}>
      {showCounter ? 'Hide' : 'Show'} Counter
    </button>
    {showCounter && <Counter />}
  </div>
)


  // const [count, setCount] = React.useState(0);

  // if(count > 10  ||  count < -10){
  //   console.log('ERROR');
  // }
  // React.useEffect(() => {
  //   console.log('componentDidMount');
  // }, []);

  // return (
  //   <div>
  //     {/* <p>componentDidMount: {count} times</p>
  //     <button
  //       onClick={() => {
  //         setCount(count + 1);
  //       }}
  //     >
  //       Click Me to Increase
  //     </button>

  //     <button
  //       onClick={() => {
  //         setCount(count - 1);
  //       }}
  //     >
  //       Click Me to Decrease
  //     </button> */}

  //   </div>
  // );
}

//array of names

export default App;

