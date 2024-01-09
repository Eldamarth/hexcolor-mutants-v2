// App.js
import React from 'react';
import Bacterium from './Bacterium';
import './App.css';
// ... (imports)

class App extends React.Component {
  render() {
    return (
      <div className="microscope">
        <div className="mask"></div>
        {[...Array(25)].map((_, index) => (
          <Bacterium key={index} />
        ))}
      </div>
    );
  }
}

// ... (export statement)

export default App;
