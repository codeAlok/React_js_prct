// import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {

  // component inside component use
  // function Apple(){
  //   return(
  //     <div>Apple component</div>
  //   );
  // }

  //check working of event and function in react
  function checkAlert() {
    alert("function called");
  }

  return (
    <div className="App">
     <h1>Hello world</h1>
     <User />
     
     {/* component used method 1 & 2 */}
     {/* {Apple()}     */}
     {/* <Apple /> */}


    {/* write fn name inside without () to work on click otherwise run auto after page render */}
    {/* or can use Arrow function ,()=>{} this don't run auto */}
    <div>
      {/* <button onClick={checkAlert}>click here</button> */}
      <button onClick={()=> checkAlert()}>click here</button>
    </div>

    </div>
  );
}

export default App;
