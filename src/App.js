import React, { Component } from 'react';
import './App.css'; 
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; 
import ECUHeader from './components/ECUHeader';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
               <ECUHeader />  
            </div>
        );
    }
}; 

export default App;
