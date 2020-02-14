import React from 'react'; 
import styles from './ComissionSummaryBanner.module.css'
import { Button, Container, Row, Col, ProgressBar} from 'react-bootstrap';

const ComissionSummaryBanner = () => {
    return (
        <div>
            <Container className={styles.container}>
                SALES MANAGER
                        <h2>Edith Bunker</h2> 
                    <span className={styles.bar}><ProgressBar variant="success" min={0} max={28} now={31} /></span>
                    <span className={styles.bar}><ProgressBar variant="warning" min={0} max={11,651,365} now={8,277,114} /></span>
            </Container>
            </div>
        );
};

export default ComissionSummaryBanner; 