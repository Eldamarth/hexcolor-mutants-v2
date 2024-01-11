import React from "react";
import MutantNode from "./MutantNode";

export default function Mutant({ mutant }) {
  return (
    <div id={mutant.key} className="mutant">
      <div className="mutant-body"></div>
      {mutant.DNA.map((hexColorCode, index) => (
        <MutantNode
          hexColorCode={hexColorCode}
          index={index}
          key={mutant.key}
        />
      ))}
    </div>
  );
}
