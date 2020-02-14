import React, { Component } from 'react';
import './App.css'; 
import Nav from './components/Nav'
import ECUHeader from './components/ECUHeader';
import CommissionSummaryBanner from './components/CommissionSummaryBanner'; 
import MonthlySummary from './components/MonthlySummary';
import CommissionBar from './components/CommissionBar';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <ECUHeader />  
                <Nav /> 
                <CommissionSummaryBanner /> 
                <MonthlySummary />
                <CommissionBar />
            </div>
        );
    }
}; 

export default App;
