import React, { Component } from 'react';
import styles from './MonthlySummary.module.css'
import { Button, Container, Row, Col, ProgressBar, Table } from 'react-bootstrap';

class MonthlySummary extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Container>
                    <h3 id={styles.head}>Monthly Summary</h3> 
                    <Table>
                    <thead>
                        <tr>
                                <th className={styles.col1}>Source</th>
                                <th className={styles.col2}>Rate</th>
                                <th className={styles.col3}>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                                <td className={styles.col1}>LO Commision-Self-Sourced</td>
                                <td className={styles.col2}>0.490%</td>
                                <td className={styles.col3}>$30,000.00</td>
                        </tr>
                        <tr>
                                <td className={styles.col1}>LO Commision-ECU-Sourced</td>
                                <td className={styles.col2}>0.590%</td>
                                <td className={styles.col3}>$ 42,473.00</td>
                        </tr>
                        <tr>
                                <td className={styles.col1}>Bonus</td>
                                <td className={styles.col2}></td>
                                <td className={styles.col3}>$ 4,587.00</td>
                        </tr>
                        <tr>
                                <td className={styles.col1}>LOA Commisions Paid</td>
                                <td className={styles.col2}>0.090%</td>
                                <td className={styles.col3}>($76,000.00)</td>
                        </tr>
                        <tr>
                                <td className={styles.col1}>Total LO Commission</td>
                                <td className={styles.col2}></td>
                                <td className={styles.col3}>$69,460.00</td>
                        </tr>
                        <tr>
                                <td className={styles.col1}>Sales Manager Commission</td>
                                <td className={styles.col2}></td>
                                <td className={styles.col3}>$31,323.00</td>
                        </tr>
                        <tr>
                            <td>
                                    <h4 className={styles.col1}>Total Commission</h4>
                            </td>
                            <td></td>
                            <td>
                                    <h4 className={styles.col3}>$ 100,783.00</h4>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Container>
                </div>
            );
    }
};

export default MonthlySummary;