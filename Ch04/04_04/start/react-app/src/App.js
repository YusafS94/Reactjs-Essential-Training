import "./App.css";
import { useState } from "react";


function App({ library }) {
  const [emotion, setEmotion] = useState("happy");
  console.log(what)
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
    </div>
  );
}

export default App;
