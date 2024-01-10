import React from "react";
import MutantNode from "./MutantNode";

const Mutant = ({ mutant }) => {
	return (
		<div id={mutant.key} className="mutant">
			<div className="mutant-body"></div>
			{mutant.DNA.map((seed, index) => (
				<MutantNode seed={seed} index={index} key={mutant.key + index} />
			))}
		</div>
	);
};

export default Mutant;
