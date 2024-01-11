import { createContext, useEffect, useState } from "react";
import GameEnvironment from "../logic/GameEnvironment";

export const AppContext = createContext();

export default function ContextHOC({ children }) {
  const game = new GameEnvironment();
  const [entities, setEntities] = useState(game.entities);

  function tick() {
    game.tick();
    setEntities(game.entities);
  }
  let valueObj = { game, entities, tick };

  return <AppContext.Provider value={valueObj}>{children}</AppContext.Provider>;
}
