import logo from './logo.svg';
import './App.css';
import HookUseState from './Components/HookUseState';
import HookUseEffectFetchData from './Components/HookUseEffectFetchData';
import IntervalHookCounter from './Components/IntervalHookCounter';
import HookUseContext from './Components/HookUseContext';
import HookUseReducer from './Components/HookUseReducer';

function App() {
  return (
    <div className="App">
      <HookUseState />
      <hr />
      <IntervalHookCounter />
      <hr />
      {/* <HookUseEffectFetchData /> */}
      <hr />
      <HookUseContext />
      <hr />
      <HookUseReducer />
    </div>
  );
}

export default App;
