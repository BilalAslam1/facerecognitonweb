import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation.js";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition.js";
import Logo from "./Components/Logo/Logo.js";
import Particles from "react-particles-js";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./Components/Rank/Rank.js";
import "./App.css";
// import Clarifai from "clarifai";

const particleOptions = {
  particles: {
    number: {
      value: 140,
    },
    density: {
      enable: true,
      value_area: 1000,
    },
    size: {
      value: 3,
    },
  },
};
const Clarifai = require("clarifai");
const app = new Clarifai.App({
  apiKey: "test",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function (response) {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },
      function (err) {
        // there was an error
      }
    );
  };
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
