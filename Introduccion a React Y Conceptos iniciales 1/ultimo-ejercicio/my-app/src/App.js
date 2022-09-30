import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Sections } from "./components/Sections";
import "./stylesheet.css"
function App() {
  return (
    <span className="App">
      <Header/>
      <Menu/>
      <Sections/>
      <Content/>
      <Footer/>
    </span>
  );
}

export default App;
