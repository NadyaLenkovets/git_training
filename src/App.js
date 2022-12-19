import './App.css';
import { CounterFunc } from './components/Counter-func';
import { CounterClass } from './components/Counter-class';

function App() {
  return (
    <div className="App">
      <header className='header'>
        Git training
      </header>
      <div><CounterFunc /></div>
      <div><CounterClass /></div>
      {/* some changes */}
    </div>
  );
}

export default App;
