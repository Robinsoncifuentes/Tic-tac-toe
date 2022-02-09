import React from "react";
import { Formulario } from "./formulario.jsx";
import { Board } from "./Board.jsx";
import { Square } from "./square.jsx";

const Home = () => {
	return (
		<>
			<h1 className="header">Tic Tac Toe in React.js</h1>

			<Board />
		</>
	);
};

export default Home;
