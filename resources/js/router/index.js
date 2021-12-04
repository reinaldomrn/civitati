import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Detalle } from "../components/Detalle";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { MainState } from "../context/MainState";

function Router(props) {
    return (
        <div>
            <MainState></MainState>
            <BrowserRouter>
                <Navbar />
                <div className="py-4">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/actividad/:id" component={Detalle} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Router;
