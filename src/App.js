import './App.css';
import { CounterFunc } from './components/Counter-func';
import { CounterClass } from './components/Counter-class';
import { Feature2 } from './components/Feature2';

function App() {
  return (
    <div className="App">
      <header className='header'>
        Git training
      </header>
      <Feature2 />
      <div><CounterFunc /></div>
      <div><CounterClass /></div>
      <p>Hello</p>
      {/* some code */}
    </div>
  );
}


export default App;
