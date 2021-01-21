import './App.css';
import CatFact from './components/CatFact';

function App() {
  return (
    <div className="App">
      <h1>Random Cat Facts</h1>
      <p>You must be extremely bored if you're looking for random facts about cats...</p>
      <CatFact />
    </div>
  );
}

export default App;
