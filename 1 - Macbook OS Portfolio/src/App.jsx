import React from "react";
import Welcome from "#components/Welcome";
import Navbar from "#components/Navbar";
import Dock from "#components/Dock";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Terminal from "#windows/Terminal";

gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  );
};

export default App;
