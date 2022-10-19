import React,{Component} from 'react';

// class ClassComp extends Component {
//     constructor() {
//         super();  // must use super()
        
//         this.state = {
//             data: 1
//         }
//     }

//     apple() {
//         this.setState({data: this.state.data + 1});
//         // to change data or update data
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.data}</h1>
//                 <button onClick={()=> this.apple()}>click</button>
//             </div>
//         )
//     }
// }


//*** Props in classComp ***
class ClassComp extends Component {

    // we can only change props in parent component and not in this(child) component

    render() {
        console.log(this.props);

        return(
            <div style={{backgroundColor: 'skyblue'}}>
                <h3>{this.props.name}</h3>
                <h3>{this.props.email}</h3>
            </div>
        )
    }
}

export default ClassComp;