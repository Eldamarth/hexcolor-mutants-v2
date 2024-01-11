// App.js
// ... (imports)
import "./App.css";
import React, { useContext } from "react";
import Bacterium from "./Bacterium";
import Microscope from "./Microscope";
import { AppContext } from "./ContextHOC";

export default function App() {
  const { game, entities, tick } = useContext(AppContext);
  setTimeout(tick, 500);

  return <Microscope />;
}

// ... (export statement)

// import React from "react";
// import "../components/App.css";
// import GameEnvironment from "../logic/main";
// import MutantEnvironment from "./MutantEnvironment";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mutants: [],
//       game: new GameEnvironment(),
//     };
//   }

//   get game() {
//     return this.state.game;
//   }

//   componentDidMount() {
//     this.defineMutants();
//     this.nextTick();
//   }

//   defineMutants() {
//     this.setState({ mutants: this.game.mutants });
//   }

//   nextTick() {
//     // console.log(`TICK`);

//     this.game.triggerEvent();

//     this.defineMutants();
//     setTimeout(this.nextTick.bind(this), 100);
//   }

//   render() {
//     let { mutants } = this.state;
//     return (
//       <div className="App-header">
//         <h2>TURN {this.game.duration}</h2>
//         <h3>{this.game.population + "/" + this.game.populationLimit}</h3>

//         <MutantEnvironment mutants={mutants} />
//         <div className="slogan">Welcome to Discount Jurassic Park</div>
//       </div>
//     );
//   }
// }

// export default App;
