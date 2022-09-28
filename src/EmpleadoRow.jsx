import React from 'react';
import { Col, Container, ListGroup, Row, Badge } from 'react-bootstrap';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = () => {
    return (
        <ListGroup.Item>
            <Container>
                <Row>
                    <Col>
            <EmpleadoAvatar>
            </EmpleadoAvatar>
                    </Col>
                    <Col>
                    <p className="fw-bold">titulo</p>
                    <p>titulo</p>
                    <Badge pill bg='primary'>titulo</Badge>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    );
};

export default EmpleadoRow;