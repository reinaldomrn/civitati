import React, { useState } from "react";

import { MainContext } from "./MainContext";
import { useForm } from "../hooks/useForm";

export const MainState = (props) => {
    const [loader, setLoader] = useState(false);
    const [formValues, handleInputChange, reset] = useForm({ fecha: '', numeroPersona: '' });
    const [main, setMain] = useState({
        actividades: []
    });

    const setLoading = (active = false) => {
        setLoader(active);
    };

    const setActividades = (actividades) => {
        setMain({ ...main, actividades});
    };

    return (
        <MainContext.Provider
            value={{
                loader,
                setLoading,
                setActividades,
                actividades: main.actividades,
                formValues,
                handleInputChange,
                reset,
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
};
