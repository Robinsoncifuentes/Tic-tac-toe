import React from "react";
export const Square = (props) => {
	return (
		<div>
			<button className="btn" onClick={() => props.onClick()}>
				{props.value}
			</button>
		</div>
	);
};
