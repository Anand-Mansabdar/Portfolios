import React from "react";
import Welcome from "#components/Welcome";
import Navbar from "#components/Navbar";
import Dock from "#components/Dock";


const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  );
};

export default App;
