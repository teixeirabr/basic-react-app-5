import "./App.css";
import Image from "./components/Image";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Image url={"http://earthporm.com/wp-content/uploads/2014/07/animal-children-photography-elena-shumilova-2.jpg"} />
      </div>
    );
  }
}

export default App;
