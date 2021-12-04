import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { MainContext } from "../context/MainContext";
import { crear } from "../service/reservar.service";
import Swal from "sweetalert2/src/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useHistory } from "react-router";
export const BtnComprar = ({ id, precio = 0 }) => {
    const history = useHistory();
    const { formValues } = useContext(MainContext);
    const handleClick = async () => {
        const { fecha, numeroPersona } = formValues;
        const payload = {
            numeroPersona,
            precio: numeroPersona * precio,
            fecha,
            idActividad: id,
        };

        try {
            await crear(payload);
            Swal.fire(
                "Éxito",
                "Su compra fue realizada éxitosamente.",
                "success"
            ).then(()=>{
                history.push("/");
            });
        } catch (error) {
            Swal.fire(
                "Error",
                "Disculpe, su compra no fue realizada, por favor intente de nuevo.",
                "error"
            ).then();
        }
    };

    return (
        <div>
            <Button className="btn-success" onClick={handleClick}>
                Comprar Ahora
            </Button>
        </div>
    );
};
