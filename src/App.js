// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';  //Hooks in react
import './App.css';
import User from './User';
import ClassComp from './ClassComp'; //for state & prop in class_comp

import Student from './Student'  // for props
import Login from './Login'  //for form validation
import Student1 from './Student1';  // for componentWillUnmount

import './style.css'; // to check styles in react
import style from './custom.module.css'; // to work with module styles in react

import { Button, Alert } from 'react-bootstrap'; //Bootstrap 
import { Table } from 'react-bootstrap'; //Bootstrap table

import ReuseComp from './ReuseComp'; // to reuse component through loops

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


// // *** Input box ***
// function App() {
//   const [data, setData] = useState(null);  //state
//   const [print, setPrint] = useState(false);

//   function getData(val) {
//     console.warn(val.target.value);
//     setData(val.target.value);
//     setPrint(false); //hide when write in input
//   }

//   return(
//     <div className="App">
//       {/* <h1>{data}</h1> */}
//       {
//         print? <h1>{data}</h1> : null
//       }
//       <input type="text" onChange={getData}/>
//       <button onClick={()=> setPrint(true)}>Print Data</button>

//       {/* to toggle between hide/show  use (!argument) */}
//       <button onClick={()=> setPrint(!print)}>Toggle</button>
//     </div>
//   )
// }


// // *** Handle Form ***
// function App() {
//   const [name, setName] = useState('');
//   const [tnc, setTnc] = useState(false);
//   const [interest, setInterest] = useState('');

//   // To stop submitting form 
//   function getFormData(e) {
//     console.warn(name, tnc, interest);
//     e.preventDefault();
//   }

//   return (
//     <div className='App'>
//       <h1>Handle form in React</h1>

//       <form onSubmit={getFormData}>
//         <input type="data" placeholder='Enter name' onChange={(e)=> setName(e.target.value)}/> <br /> <br />
//         <select onChange={(e)=> setInterest(e.target.value)}>
//           <option>Bollywood</option>
//           <option>Hollywood</option>
//           <option>Tollywood</option>
//         </select>
//         <br /><br />

//         <input type='checkbox' onChange={(e)=> setTnc(e.target.checked)} /><span>Accept terms & Conditions</span>
//         <br /><br />
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }


// // *** For Basic form validation ***
// function App() {
//     return(
//         <div className='App'>
//             <Login />
//         </div>
//     )
// }


// // *** Constructor lifecycle method ***
// class App extends React.Component{
//     // constructor called before render() always as OOPs
//     // so (state) is defined here 
//     // Never call api in constructor
//     constructor() {
//         super(); // used to call parent class(React.Component)
//         this.state = {
//             name: "alok"
//         }
//     }

//     render() {
//         console.warn("render");
//         return(
//             <div>
//                 <h1>Hello world</h1>
//                 <h1>Hello {this.state.name}</h1>
//             </div>

//         )
//     }
// }


// // *** componentDidMount ***
// // can we update state in componentDidMount() ?
// // Check in which order all below function run
// class App extends React.Component{
//     constructor() {
//         super();
//         this.state={
//             name: "alok"
//         }
//         console.warn("constructor")
//     }

//     //componentDidMount is used to take care of api calls and work done after full page render and run only once after render (not after any update even) 
//     componentDidMount() {
//         console.warn("componentDidMount");
//     }

//     render() {
//         console.warn("render");

//         return(
//             <div className='App'>
//                 <h1>Component Did mount {this.state.name}</h1>
//                 <button onClick={()=> {this.setState({name: "aadi"})}}>Update Name</button>
//             </div>
//         )
//     }
// }


// // *** componentDidUpdate ***
// // check in which order and when which function run
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state={
//             count: 0
//         }
//         console.warn("constructor");
//     }

//     // run only after state/props update
//     componentDidUpdate(preProps,PreState,snapshot) {

//         // show prevState and prevProps before update
//         console.warn("componentDidUpdate",PreState);

//         //update state under a condition (otherwise infinite loop occurs)
//         // this.setState({count: this.state.count+1});  //infinite loop

//         if(this.state.count < 10) {
//             this.setState({count: this.state.count+1});
//         }
//     }

//     render() {
//         console.warn("render");
//         return(
//             <div className='App'>
//                 <h1>Component Did Update {this.state.count}</h1>

//                 <button onClick={()=>{this.setState({count: this.state.count+1})}}>update count</button>
//             </div>
//         )
//     }
// }


// // *** componentWillUnmount ***
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state={
//             show: true
//         }
//     }

//     render() {
//         return(
//             <div className='App'>
//             {
//                 this.state.show ? <Student1 /> : <h1>Child component Removed</h1>
//             }

//                 <button onClick={()=> this.setState({show: !this.state.show})}>Toggle child Component</button>
//             </div>
//         )
//     }
// }


// // *** useEffect HOOks ***
// function App() {
//     const [data, setData] = useState(10);
//     const [count, setCount] = useState(100);

//     // run on render first time as componentDidMount and on update(states/props) as respective lifecycle method as well & according to codition also

//     //called when data state update
//     useEffect(()=> {
//         console.warn('called with Data state');
//     }, [data])

//     //called when count state update
//     useEffect(()=> {
//         alert('count is: ' + count);
//     }, [count])

//     return(
//         <div className='App'>
//             <h1>useEffect Count: {count}</h1>
//             <h1>useEffect Data: {data}</h1>
//             <button onClick={()=> setCount(count+1)}>Update count</button>
//             <button onClick={()=> setData(data+1)}>Update Data</button>
//         </div>
//     )
// }


// // *** Using styles in React js ***
// function App() {
//     return(
//         <div className='App'>
//             {/* external css */}
//             <h1 className='primary'>Style type1 in React js</h1>

//             {/* internal css */}
//             <h1 style={{color: 'red', backgroundColor: 'yellow'}}>Style type2 in React js</h1>

//             {/* modular css */}
//             <h1 className={style.success}>Style type3 in React js</h1>
//         </div>
//     )
// }


// //*** Bootstrap in React ***
// function App() {
//     return (
//         <div className='App'>
//             <h1>Bootstrap in React</h1>
//             <Button variant="primary">Primary</Button>{' '}
//             <Button variant="secondary">Secondary</Button>{' '}
//             <Button variant="success">Success</Button>{' '}
//             <Button variant="warning">Warning</Button>{' '}
//             <Button variant="danger">Danger</Button>{' '}
//             <Button variant="info">Info</Button>{' '}
//             <Button variant="light">Light</Button>{' '}
//             <Button variant="dark">Dark</Button>
//             <Button variant="link">Link</Button>

//             {/* using Alert property of bootstrap */}
//             { 
//                 <Alert variant="warning">
//                     This is a warning alert—check it out!
//                 </Alert>
//             }
//         </div>
//     )
// }


// // *** Handle Array list and loopings ***
// function App() {
//     // const students = ['adi', 'rishi', 'smith', 'ritik', 'amaa'];

//     // map looking & for loop support outside return but ==> (for,while,do-while loop ) will not support inside return
//     // students.map((item)=>{
//     //     console.warn("My name in map is: ",item);
//     // });

//     // for(let i=0; i < students.length; i++) {
//     //     console.warn("My name in for loop is: ",students[i]);
//     // }

//     const candidates = [
//         {
//             name: 'adi', email: 'adi@check.com', address: [
//                 { Hn: "10", city: 'Noida', country: 'India' },
//                 { Hn: "20", city: 'delhi', country: 'India' },
//                 { Hn: "30", city: 'mumbai', country: 'India' },
//                 { Hn: "40", city: 'Noida', country: 'India' }
//             ]
//         },
//         {
//             name: 'rishi', email: 'rishi@check.com', address: [
//                 { Hn: "10", city: 'Noida', country: 'India' },
//                 { Hn: "20", city: 'delhi', country: 'India' },
//                 { Hn: "30", city: 'mumbai', country: 'India' },
//                 { Hn: "40", city: 'Noida', country: 'India' }
//             ]
//         },
//         {
//             name: 'smith', email: 'smith@check.com', address: [
//                 { Hn: "10", city: 'Noida', country: 'India' },
//                 { Hn: "20", city: 'delhi', country: 'India' },
//                 { Hn: "30", city: 'mumbai', country: 'India' },
//                 { Hn: "40", city: 'Noida', country: 'India' }
//             ]
//         },
//         {
//             name: 'amaa', email: 'amaa@check.com', address: [
//                 { Hn: "10", city: 'Noida', country: 'India' },
//                 { Hn: "20", city: 'delhi', country: 'India' },
//                 { Hn: "30", city: 'mumbai', country: 'India' },
//                 { Hn: "40", city: 'Noida', country: 'India' }
//             ]
//         }
//     ];

//     return (
//         <div className='App'>
//             <h1>List with Nested Array</h1>
//             <Table variant='dark' striped>
//                 <thead>
//                     <tr>
//                         <td>S.No.</td>
//                         <td>Name</td>
//                         <td>Email</td>
//                         <td>Address</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         // key is used to just remove an error & i to take as key & index also
//                         candidates.map((item,i) =>
//                             <tr key={i}>
//                                 <td>{i+1}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.email}</td>
//                                 <td>
//                                     <Table variant='dark' striped>
//                                         <tbody>{
//                                             item.address.map((data,x) =>
//                                                 <tr key={x}>
//                                                     <td>{data.Hn}</td>
//                                                     <td>{data.city}</td>
//                                                     <td>{data.country}</td>
//                                                 </tr>
//                                             )
//                                         }
//                                         </tbody>
//                                     </Table>
//                                 </td>
//                             </tr>
//                         )
//                     }
//                 </tbody>
//             </Table>
//         </div>
//     )
// }


//*** Reuse Component in loop ***
function App() {
    const users = [
        {
            name: 'adi', email: 'adi@check.com', contact: '111'
        },
        {
            name: 'rishi', email: 'rishi@check.com', contact: '222'
        },
        {
            name: 'smith', email: 'smith@check.com', contact: '333'
        },
        {
            name: 'sam', email: 'sam@check.com', contact: '444'
        }
    ];

    return(
        <div className='App'>
            <h1>Reuse component with list</h1>
            
            {
                users.map((item, i)=>
                <h1>
                    <ReuseComp data={item}/>
                </h1>
                )
            }
        </div>
    )
}

export default App;
