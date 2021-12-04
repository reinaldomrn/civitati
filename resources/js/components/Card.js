import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { BtnComprar } from './BtnComprar';
import { Link } from "react-router-dom";
{/* <Link to="/privacidad" target="_blank">
    aviso de privacidad.
</Link>; */}
export const Card = ({ data }) => {
    return (
        <Col xs={12}>
            <div class="card-body">
                <Link to={`actividad/${data.id}`}>
                    <h5 class="card-title">
                        <b>{data.titulo}</b>
                    </h5>
                </Link>
                <p class="card-text">{data.descripcion}</p>
                <h6 class="text-success">
                    <b>{data.popularidad} Estrellas</b>
                </h6>
                <h4>
                    Precio:{" "}
                    <b className="text-danger">
                        {Number.parseFloat(data.precio).toFixed(2)} $
                    </b>
                </h4>
                <div class="offset-md-10">
                    <BtnComprar id={data.id} precio={data.precio} />
                </div>
            </div>
            <hr />
        </Col>
    );
}
