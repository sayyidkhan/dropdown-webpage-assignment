import "./App.css";
import Section from "./components/main/Section";
import BurgerMenu from "./components/navbar/BurgerMenu";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="w-full ">
      <NavBar />
      <Section />
    </div>
  );
}

export default App;
