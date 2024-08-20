import { useState } from "react";
import "./App.css";
import Tabs from "./Tabs";

function App() {
  return (
    <div className="App">
      <h2 className="heading">Custom tabs</h2>
      <Tabs>
        <div title="home">Tabs content from Home</div>
        <div title="about">Tabs content from about</div>
        <div title="profile">Tabs content from profile</div>
      </Tabs>
    </div>
  );
}

export default App;
