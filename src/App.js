// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import User from './User';
import ClassComp from './ClassComp'; //for state & prop in class_comp

import Student from './Student'  // for props

// function App() {

//   // component inside component use
//   // function Apple(){
//   //   return(
//   //     <div>Apple component</div>
//   //   );
//   // }

//   //check working of event and function in react
//   function checkAlert() {
//     alert("function called");
//   }

//   return (
//     <div className="App">
//      <h1>Hello world</h1>
//      <User />
     
//      {/* component used method 1 & 2 */}
//      {/* {Apple()}     */}
//      {/* <Apple /> */}


//       {/* write fn name inside without () to work on click otherwise run auto after page render */}
//       {/* or can use Arrow function ,()=>{} this don't run auto */}
//       <div>
//         {/* <button onClick={checkAlert}>click here</button> */}
//         <button onClick={()=> checkAlert()}>click here</button>
//       </div>

//     </div>
//   );
// }


// *** state in react in fn_component ***
// state is to store variable in react
// through normal variable we cannot update the data. 

// function App() {
//   // let data = "alok";
//   // function updateData() {
//   //   data = "aditya";
//   //   alert(data);
//   // }

//   // // *** Using state ***
//   // const [data, setData] =  useState(0); //default value

//   // function updateData() {
//   //   setData(data+1); // to update according to previous data
//   // }

//   // console.warn("___Rendered__");

//   // return (
//   //   <div>
//   //     {/* updated data will not show here if not use state property*/}
//   //     <h1>{data}</h1> 
//   //     <button onClick={updateData}>Update Now</button>
//   //   </div>
//   // );

//   // //*** state in class_component***
//   // return(
//   //   <div>
//   //     <ClassComp />  
//   //   </div>
//   // )

  
//   // //*** Props in fn_comp ***
//   // // Props is like parameter passing
//   // // using state
//   // const [name, setName] = useState("bheem");

//   // return (
//   //   <div>
//   //     <h1>Props in React :</h1>
      
//   //     {/* general prop passing */}
//   //     {/* <Student name={"Alok"} email={"aka@test.com"} other={{address: 'Banglore', mobile: "000"}}/>

//   //     <Student name={"Rishav"} email={"risu@test.com"} other={{address: 'gurgaon', mobile: "112"}}/>

//   //     <Student name={"Aditya"} email={"adi@test.com"} other={{address: 'delhi', mobile: "223"}}/> */}

//   //     {/* changing name using state and prop */}
//   //     <Student name={name} />
//   //     <button onClick={()=> {setName("Prem")}}>Update Name</button>

//   //   </div>
//   // )


//   //*** Props in ClassComp */
//   return(
//     <div>
//       <h1>Props in class</h1>
//       <ClassComp name="abhi" email="abhi@check.com" />

//       <button>Update</button>
//     </div>
//   )
// }


// *** Input box ***
function App() {
  const [data, setData] = useState(null);  //state
  const [print, setPrint] = useState(false);

  function getData(val) {
    console.warn(val.target.value);
    setData(val.target.value);
    setPrint(false); //hide when write in input
  }

  return(
    <div className="App">
      {/* <h1>{data}</h1> */}
      {
        print? <h1>{data}</h1> : null
      }
      <input type="text" onChange={getData}/>
      <button onClick={()=> setPrint(true)}>Print Data</button>

      {/* to toggle between hide/show  use (!argument) */}
      <button onClick={()=> setPrint(!print)}>Toggle</button>
    </div>
  )
}

export default App;
