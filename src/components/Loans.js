import React, { Component } from 'react';
import { Button, Container, Row, Col, ProgressBar, Table } from 'react-bootstrap';


const Loans = () => {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Loans</th>
                        <th>Borrower</th>
                        <th>Loan Source</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Commission</th>
                        </tr> 
                </thead>
                <tbody>
                    <tr>
                        <td>982349843</td>
                        <td>Johnson</td>
                        <td>ECU</td>
                        <td>12/23/2019</td>
                        <td>$649,460.00</td>
                        <td>$2,304.00</td>
                    </tr>
                    <tr>
                        <td>982349843</td>
                        <td>Wiley</td>
                        <td>Self</td>
                        <td>12/23/2019</td>
                        <td>$649,460.00</td>
                        <td>$2,304.00</td>
                    </tr>
                    <tr>
                        <td>982349843</td>
                        <td>DeKalb</td>
                        <td>ECU</td>
                        <td>12/23/2019</td>
                        <td>$649,460.00</td>
                        <td>$2,304.00</td>
                    </tr>
                    <tr>
                        <td>982349843</td>
                        <td>Smith</td>
                        <td>ECU</td>
                        <td>12/23/2019</td>
                        <td>$649,460.00</td>
                        <td>$2,304.00</td>
                    </tr>
                    <tr>
                        <td>982349843</td>
                        <td>Stark</td>
                        <td>ECU</td>
                        <td>12/23/2019</td>
                        <td>$649,460.00</td>
                        <td>$2,304.00</td>
                    </tr>
                    </tbody>
            </Table>
            </div>
        );
};

export default Loans; 