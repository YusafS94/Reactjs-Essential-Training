import "./App.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
function Header() {
  return (
    <header>
      <Navigation />
    </header>
  )
}

function Home() {
  return (
    <div>
      <Header />
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <Header />
      <h1>About Us</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <Header />
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}
