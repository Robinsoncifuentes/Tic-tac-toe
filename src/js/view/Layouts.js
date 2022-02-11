import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Board } from "./Board";
import { Form } from "./formulario";
const Layout = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/"} component={Form} />
				<Route exact path={"/Board"} component={Board} />
			</Switch>
		</BrowserRouter>
	);
};

export default Layout;
