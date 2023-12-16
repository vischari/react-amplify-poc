// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const loadScript = () => {
  const config = {
    property: 'org',
    language: 'en-us',
    environment: 'dev',
    components: {}
  };

  /* istanbul ignore else */
  if (
    window.adsk &&
    window.adsk.components &&
    window.adsk.components.universalHeader
  ) {
    window.adsk.components.universalHeader.render(
      'uh-header-container',
      config
    );
  }
};

const appendScript = () => {
  const script = document.createElement('script');
  script.src = 'https://swc-stg.autodesk.com/web-mfe/universal-header/stage/v1/app.js';
  script.type = 'text/javascript';
  script.onload = () => loadScript();
  document.body.appendChild(script);
};

function App() {
  useEffect(() => {
    appendScript();
  }, []);
  return (
    <div className="App">
      <div id='uh-header-container'></div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      {/* </header> */}
    </div>
  );
}

export default App;
