import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home/Home";
import AboutUs from "./component/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
    </div>
  );
}

export default App;
