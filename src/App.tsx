import logo from './logo.svg';
import './App.css';
import Heading from './Heading';

function App() {
  return (
    <div className="App">
      <Heading/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

App.whyDidYouRender = true;

export default App;
