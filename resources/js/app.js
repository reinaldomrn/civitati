import React from "react";
import ReactDOM from "react-dom";
import { MainState } from "./context/MainState";
import Router from "./router";


function App() {
    return (
        <MainState>
            <Router />
        </MainState>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}