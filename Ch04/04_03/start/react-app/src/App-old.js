import "./App.css";

const [firstCity, secondCity, thirdCity] = ["Tokyo", "London", "Beijing"]

console.log(firstCity, secondCity, thirdCity)

function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
