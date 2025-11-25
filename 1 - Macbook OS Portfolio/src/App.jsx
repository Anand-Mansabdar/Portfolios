import React from "react";
import Welcome from "#components/Welcome";
import Navbar from "#components/Navbar";
import Dock from "#components/Dock";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Terminal from "#windows/Terminal";
import Safari from "#windows/Safari";
import Resume from "#windows/Resume";
import Finder from "#windows/Finder";
import Text from "#windows/Text";
import ImageContent from "#windows/ImageContent";
import Contact from "#windows/Contact";
import Home from "#components/Home";
import Photos from "#windows/Photos";

gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageContent />
      <Contact />
      <Home />
      <Photos />
    </main>
  );
};

export default App;
