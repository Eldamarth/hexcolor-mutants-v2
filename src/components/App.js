// App.js
// ... (imports)
import React from "react";
import Bacterium from "./Bacterium";
import "./App.css";

import GameEnvironment from "../logic/GameEnvironment";
import Microscope from "./Microscope";

class App extends React.Component {
  render() {
    return <Microscope />;
  }
}

// ... (export statement)

export default App;

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
