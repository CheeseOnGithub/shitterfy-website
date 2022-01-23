import React from 'react';
import { Routes, Route } from "react-router-dom"
import Homepage from './components/homepage';
import About from './components/about';
import Download from './components/download';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/download" element={<Download />} />
        <Route path="/amongusfree" element={ () => {
          window.location.replace("https://github.com/CheeseOnGithub/shitify/releases");
          return null;
        }} />
      </Routes>
    </div>
  );
}

export default App;
