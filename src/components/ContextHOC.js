import { createContext, useEffect, useState } from "react";
import GameEnvironment from "../logic/GameEnvironment";

export const AppContext = createContext();

export default function ContextHOC({ children }) {
  const [game, setGame] = useState(new GameEnvironment());

  const [entities, setEntities] = useState(game.entities);

  function tick() {
    game.tick();
    setEntities(game.entities);
  }
  setTimeout(tick, 2000);
  let valueObj = { game, entities };

  return <AppContext.Provider value={valueObj}>{children}</AppContext.Provider>;
}
