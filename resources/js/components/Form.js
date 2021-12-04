import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import validator from "validator";
import { MainContext } from "../context/MainContext";
import { getAll } from "../service/actividad.service";
import moment from "moment";

export const Form = () => {
    const { formValues, handleInputChange, setActividades } =
        useContext(MainContext);
    const [valido, setValido] = useState(false);

    const esValido = () => {
        const { fecha, numeroPersona } = formValues;
        return (
            validator.isEmpty(fecha) ||
            validator.isEmpty(numeroPersona) ||
            !validator.isDate(fecha) ||
            !validator.isNumeric(numeroPersona) || numeroPersona <= 0
        );
    };

    useEffect(() => {
        setValido(esValido());
    }, [formValues]);

    const handleClick = async () => {
        const { fecha } = formValues;
        const data = await getAll(fecha);
        setActividades(data.data);
    };

    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <h4>Introdusca los siguientes datos</h4>
                    <hr />
                </Col>
                <Col md={6} xs={12}>
                    <input
                        className="form-control"
                        type="date"
                        placeholder="Fecha"
                        name="fecha"
                        onChange={handleInputChange}
                        value={formValues.fecha}
                        min={moment().format("YYYY-MM-DD")}
                    />
                </Col>
                <Col md={4} xs={12}>
                    <input
                        className="form-control"
                        type="number"
                        onChange={handleInputChange}
                        name="numeroPersona"
                        value={formValues.numeroPersona}
                    />
                </Col>
                <Col md={2} xs={12}>
                    <Button
                        type="button"
                        className="btn btn-primary"
                        disabled={valido && true}
                        onClick={handleClick}
                    >
                        Buscar actividad
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};
