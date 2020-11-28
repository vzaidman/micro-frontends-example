import logo from './logo.svg';
import './App.css';
import MicroApp from './shared/MicroApp';

function App() {
  return (
    <div className="App">
      <MicroApp name="my-micro-app" url={process.env.MY_MICRO_APP_URL}/>
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
