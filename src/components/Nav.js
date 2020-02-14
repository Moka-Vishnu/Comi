import React from 'react';
import styles from './ECUHeader.module.css';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

const Nav = () => {
    return (
        <div>
            <Container>
                <Breadcrumb className={styles.nav}>
                <Breadcrumb.Item href="#">Employees</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Roles</Breadcrumb.Item>
                <Breadcrumb.Item active>Units</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Relationship</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Loans</Breadcrumb.Item>
                </Breadcrumb>
                </Container> 
            </div>
    );
};

export default Nav;