import React from "react";
import Navigation from "./Components/Navigation/Navigation.js";
import Logo from "./Components/Logo/Logo.js";
import Particles from "react-particles-js";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./Components/Rank/Rank.js";
import "./App.css";

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
function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* {
      <FaceRecognition /> } */}
    </div>
  );
}

export default App;
