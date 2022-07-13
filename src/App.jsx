import './App.css';
import Home from './components/home/Home';
import Skill from './components/skill/Skill';
import Menus from './components/sideMenu/sMenu';
import Menun from './components/navMenu/nMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menus />
        <Menun />
      </header>
      <main>
        <Home />
        <Skill />
      </main>
    </div>
  );
}

export default App;
