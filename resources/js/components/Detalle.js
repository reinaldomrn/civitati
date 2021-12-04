import React, { useCallback, useContext, useEffect, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getById } from "../service/actividad.service";
import { BtnComprar } from "./BtnComprar";
import { useHistory, useParams } from "react-router";
import { MainContext } from "../context/MainContext";
import moment from "moment";

export const Detalle = () => {
    const { id } = useParams();
    const history = useHistory();
    const [data, setData] = useState({});
    const { formValues } = useContext(MainContext);
    const consultarActividad = useCallback(async () => {
        const response = await getById(id, formValues.fecha);
        const resultado = response.data;
        if (resultado) {
            setData(
                resultado[0].relacionadas != null
                    ? {
                          ...resultado[0],
                          relacion: resultado[0].relacionadas.split(","),
                      }
                    : resultado[0]
            );
            console.log(data);
        } else {
            history.push("/");
        }
    }, []);
    useEffect(() => {
        consultarActividad();
    }, []);
    return (
        <Container>
            <Row>
                <Col xs="12">
                    <h2>Detalle de la actividad </h2>
                    <Nav.Link as={NavLink} to="/">
                        Volver Atras
                    </Nav.Link>
                    <br />
                </Col>
            </Row>
            <Row>
                <Col xs="6">
                    <h5>Nombre</h5>
                    {data?.titulo}
                </Col>
                <Col xs="6">
                    <h5>Fecha</h5>
                    {moment(data?.fechaInicio, "YYYY-MM-DD").format(
                        "DD/MM/YYYY"
                    )}
                </Col>
            </Row>
            <Row>
                <Col xs="6">
                    <h5>Número de personas</h5>
                    {formValues.numeroPersona}
                </Col>
                <Col xs="6">
                    <h5>Precio Total a Abonar</h5>
                    {(formValues.numeroPersona * data?.precio)?.toFixed(2)} $
                </Col>
                <div>
                    <br />
                    <BtnComprar
                        floatLeft={false}
                        id={data?.id}
                        precio={data.precio}
                    />
                    <br />
                </div>
                {data?.relacion && (
                    <>
                        <Col xs="12">
                            <h2>
                                Actividades relacionadas que le pueden interesar
                            </h2>
                        </Col>
                        <Col xs="12">
                            <ul>
                                {data?.relacion.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </Col>
                    </>
                )}
            </Row>
        </Container>
    );
};
