import React, { Component } from 'react';
import { Button, Container, Row, Col, ProgressBar, Table } from 'react-bootstrap';

const SalesManagement = () => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Loan Officer</th>
                    <th>Borrower</th>
                    <th>Loan Source</th>
                    <th>Amount</th>
                    <th>Rate</th>
                    <th>Commission</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Archie Bunker</td>
                    <td>--</td>
                    <td>--</td>
                    <td>$1,498,847.00</td>
                    <td>0.090%</td>
                    <td>$804.00</td>
                </tr>
                <tr>
                    <td>Theon Greyjoy</td>
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

export default SalesManagement;