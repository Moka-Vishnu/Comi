import React, { Component } from 'react';
import { Button, Container, Row, Col, ProgressBar, Table, Accordion, Card } from 'react-bootstrap';

const LoanOfficerAssistants = () => {
    return (
        <Table>
            <thead>
                <tr>
                <th>Loan Officer Assistant</th>
                <th>Borrower</th>
                <th>Loan Source</th>
                <th>Amount</th>
                <th>Rate</th>
                <th>Commission</th>
                        </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Marge Simpson</td>
                    <td>--</td>
                    <td>--</td>
                    <td>$1,498,847.00</td>
                    <td>0.090%</td>
                    <td>$804.00</td>
                </tr>
                <tr>
                    <td>Ally Sheedy</td>
                    <td>--</td>
                    <td>--</td>
                    <td>$1,498,847.00</td>
                    <td>0.090%</td>
                    <td>$764.00</td>
                </tr>
                </tbody>
            </Table>
        );
};

export default LoanOfficerAssistants;