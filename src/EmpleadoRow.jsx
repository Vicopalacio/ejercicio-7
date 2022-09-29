import React from "react";
import { Col, Container, ListGroup, Row, Badge } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({empleado}) => {
  return (
    <>
      <ListGroup.Item>
        <Container>
          <Row>
            <Col>
              <EmpleadoAvatar empleado={empleado}></EmpleadoAvatar>
            </Col>
            <Col>
              <p className="fw-bold">{empleado.nombre}</p>
              <p>{empleado.titulo}</p>
              <Badge pill bg="primary">
                {empleado.profesion}
              </Badge>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    </>
  );
};

export default EmpleadoRow;
