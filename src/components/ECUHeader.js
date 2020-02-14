import React, { Component } from 'react';
import styles from './ECUHeader.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';  


const ECUHeader = () => {
    return (
        <div className={styles.container}> 
            <Container className={styles.ECUHeader}>
                <Row>
                    <Col sm={10}>
                       <img src={require('./eculogo.svg')} alt="ECU" id={styles.img} />
                        </Col>
                    <Col sm={2}>
                        <Button variant="link" size="lg" className="d-inline-block align-top">Log Out</Button>
                    </Col> 
                  </Row>  
                 </Container>         
            </div>
        );
};

export default ECUHeader; 