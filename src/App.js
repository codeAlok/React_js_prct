// import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {

  // component inside component use
  function Apple(){
    return(
      <div>Apple component</div>
    );
  }

  return (
    <div className="App">
     <h1>Hello world</h1>
     <User />
     
     {/* component used method 1*/}
     {Apple()}
     <Apple />

    </div>
  );
}

export default App;
