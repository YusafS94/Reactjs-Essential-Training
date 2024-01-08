import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Type here...");
  const [color, setColor] = useState("#D57D34");
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("Type here...");
    setColor("#D57D34");
  };
  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
        type="text"
        placeholder="color title..."
      />
      <input
        value={color}
        type="color"
        onChange={(event) =>
          setColor(event.target.value)
        }
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
