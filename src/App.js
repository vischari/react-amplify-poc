// import logo from './logo.svg';
import './App.css';
import { MfeLoader } from "@adsk/cfp-core";
import UniversalHeader from "./components/UniversalHeader"

function App() {
  return (
    <div className="App">
      <UniversalHeader />
      <MfeLoader name="user-management-mfe" cfp={{ url: "https://app.autodesk.com:3000/static/js/main.js" }} />
    </div>
  );
}

export default App;
