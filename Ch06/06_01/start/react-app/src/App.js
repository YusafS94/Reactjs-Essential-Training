import "./App.css";
import { useState, useEffect } from "react";



function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/YusafS94`)
      .then((response) => response.json())
      .then(setData)
  }, []);
  if (data)
    return (
      <pre>{JSON.stringify([data.login, data.id, data.url], null, 2)}</pre>
    );
  return (
    <h1>Data</h1>
  );
}

export default App;
