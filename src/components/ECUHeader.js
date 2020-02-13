import React, { Components } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'; 
import Button from 'react-bootstrap/Button'; 
 


const ECUHeader = () => {
    return (
        <div>
            
            <Navbar>
                <Navbar.Brand href="#home">
                    <img
                        src={require('./eculogo.svg')} 
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Navbar>
                <Button variant="link" size="lg">Log Out</Button> 
                 
            </div>
        );
};

export default ECUHeader; 