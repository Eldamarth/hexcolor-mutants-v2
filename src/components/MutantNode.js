import React from "react";

const MutantNode = ({ seed, index }) => {
	let classStyles = [
		`upLeft`,
		`upCenter`,
		`upRight`,
		`downLeft`,
		`downCenter`,
		`downRight`,
	];
	let classStyle = classStyles[index];
	return (
		<div
			className={`mutant-node ${classStyle}`}
			style={{
				borderTopColor: seed,
			}}
		></div>
	);
};

export default MutantNode;
