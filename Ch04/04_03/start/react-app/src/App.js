import "./App.css";
import { useState } from "react";


function App() {
  const [emotion, setEmotion] = useState("happy");
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("confused")}>Confused</button>
    </div>
  );
}

export default App;
