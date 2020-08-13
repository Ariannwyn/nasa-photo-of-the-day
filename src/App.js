import React from "react";
import "./App.css";
import NasaInfo from "./components/NasaInfo";
import Header from "./components/Header";
import BackgroundEffect from "./components/BackgroundEffect";



function App() {

  
  return (
    <div className="App">
      <BackgroundEffect />
      <Header/>
      <NasaInfo/>
    </div>
  );
}

export default App;
