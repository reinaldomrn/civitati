import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Form } from "./Form";
import { Card } from "./Card";
import { MainContext } from "../context/MainContext";
export const Home = () => {

    const { actividades } = useContext(MainContext);
    return (
        <Container>
            <Form />
            <br />
            <br />

            <Row>
                <Col xs={12}>
                    <h2>Listado de Actividades</h2>
                </Col>
            </Row>
            {actividades.length > 0 ? (
                actividades.map((item) => <Card key={item.id} data={item} />)
            ) : (
                <div class="alert " role="alert">
                    <h4 class="alert-heading">No se enconcontraron actividades!</h4>
                    <p>
                        Por favor, seleccione una fecha y especifique un número de personas e intente de nuevo.
                    </p>
                </div>
            )}
        </Container>
    );
};
