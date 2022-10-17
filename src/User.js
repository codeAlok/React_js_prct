// *** functional component ***
// function User() {
//     return(
//         <>
       
//         <h1>User Component</h1>
//         <h1>User not</h1>

//         </>
//     )        
// }

// export default User;

//*** class component ***
// import React,{Component} from 'react';
// export default class User extends Component {
//     render() {
//         return (
//             <>
//                 <h1>Hello from user </h1>
//                 <h1>Hello from user2 </h1>
//             </>
            
//         )
//     }
// }


// *** Without xml writing js+html together (tough to implement) ***
import React from 'react';

export default function User() {
    // return React.createElement('div',null,"Hello world");   // one element

    //format: React.createElement(tagname, id/class, content);

    //element inside element
    return React.createElement('div',null, React.createElement('h1', null, "Heading 1"));

    //output: heading inside a div.
}
