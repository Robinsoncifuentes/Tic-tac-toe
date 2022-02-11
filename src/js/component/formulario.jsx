import React from "react";
export const Form = (props) => {
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
								<button className="btn1 p-3">X</button>
								<button className="btn1 p-3">O</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};
