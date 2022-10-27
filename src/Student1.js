import './App.css';
import React from 'react';

class Student1 extends React.Component {
    // componentWillUnmount called automatically whenever this component will be removed from DOM
    componentWillUnmount() {
        console.warn("componentWillUnmount called");
    }

    render() {
        return(
            <div className='App'>
                <h1>Student component</h1>
            </div>
        )
    }
}

export default Student1;