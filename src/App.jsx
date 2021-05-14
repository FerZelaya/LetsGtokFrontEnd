import './App.css';

//Components
import NavBar from "./Components/NavBar/navbar";
import Section1 from "./Components/Body/section1/section1"
import Section2 from "./Components/Body/section2/section2"
import Section3 from "./Components/Body/section3/section3"

function App() {
  return (
    <div className="main-container">
      <NavBar/>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  );
}

export default App;
