import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Lista } from './components/Lista';
import { Timer } from './components/Timer';
import { ToDoList } from './components/ToDoList';
import { Eventos } from './components/Eventos';
import { WeatherList } from './components/weather/WeatherList';

function App() {
  
  return (
    <>
      <Lista/>
      <Timer/>
      <Header/>
      <Footer/>
      <WeatherList/>
      <ToDoList/>
      <Eventos/>
    </>
  );
}

export default App;
