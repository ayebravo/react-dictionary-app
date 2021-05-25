import DictIcon from "./media/DictIcon.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
            <h1 className="heading">Dictionary</h1>
            <img src={DictIcon} id="dictIcon" alt="dictionary icon" className="img-fluid" />
        </header>
        <main className="App-main">
          <Dictionary />
        </main>
        <footer className="App-footer">
            <small>Coded by Ayelen Bravo</small>
        </footer>
      </div>
    </div>
  );
}
