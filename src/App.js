import logo from './pokeball.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Seungwon's website 
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=xm3YgoEiEDc"
          target="_blank"
          rel="noopener noreferrer"
        >Click
          
        </a>
      </header>
    </div>
  );
}

export default App;
