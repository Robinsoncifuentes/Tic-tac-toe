import React from "react";
import { Link } from "react-router-dom";
export const Form = () => {
	return (
		<form>
			<div className="container">
				<h1>Tic Tac Toe in React.js</h1>
				<h2>Pick A Weapon</h2>
				<div id="box" className="row  mw-100 mh-100">
					<div className="">
						<div className="p-5 ">
							<h2>Choose A Weapon</h2>
							<label className="p-3">
								<input
									id="input"
									type="text"
									placeholder="Player 1 username"
								/>
							</label>

							<label className="p-3">
								<input
									id="input"
									type="text"
									placeholder="Player 2 username"
								/>
							</label>
							<div>
								<button className="btn1 p-3">
									<Link className="nav-link" to="/Board">
										X
									</Link>
								</button>
								<button className="btn1 p-3">
									<Link className="nav-link" to="/Board">
										O
									</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};
