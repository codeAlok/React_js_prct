import React,{Component} from 'react';

class ClassComp extends Component {
    constructor() {
        super();  // must use super()
        
        this.state = {
            data: 1
        }
    }

    apple() {
        this.setState({data: this.state.data + 1});
        // to change data or update data
    }

    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=> this.apple()}>click</button>
            </div>
        )
    }
}

export default ClassComp;