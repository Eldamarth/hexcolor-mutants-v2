import { useContext } from "react";
import Bacterium from "./Bacterium";
import { AppContext } from "./ContextHOC";

export default function Microscope(props) {
  const { game, entities, tick } = useContext(AppContext);

  return (
    <div className="microscope">
      {entities.map((entity) => (
        <Bacterium key={entity.key} entity={entity} />
      ))}
    </div>
  );
}
