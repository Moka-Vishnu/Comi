import React, { Component } from 'react';
import styles from './CommissionBar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loans from './Loans';
import LoanOfficerAssistants from './LoanOfficerAssistants'; 
import SalesManagement from './SalesManagement';
import { Container, Row, Col, Accordion, Button, Card } from 'react-bootstrap';  

const CommissionBar = () => {
        return(
            <div>
                <Container>
                    <Accordion bsPrefix>
                    <Card>
                        <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Loans
      </Accordion.Toggle>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Loan Officer Assistants
      </Accordion.Toggle>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    Sales Management
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body><Loans /></Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body><LoanOfficerAssistants /></Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body><SalesManagement /></Card.Body> 
                            </Accordion.Collapse>
                    </Card>
                    </Accordion>
                    </Container>
                </div>
            );
    };

export default CommissionBar; 