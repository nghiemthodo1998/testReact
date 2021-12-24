import logo from './logo.svg';
import './App.css';
import HookUseState from './Components/HookUseState';
import HookUseEffectFetchData from './Components/HookUseEffectFetchData';
import IntervalHookCounter from './Components/IntervalHookCounter';
import HookUseContext from './Components/HookUseContext';
import HookUseReducer from './Components/HookUseReducer';
import HookUseMemo from './Components/HookUseMemo';
import HookUseRef from './Components/HookUseRef';

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
      <hr />
      <HookUseMemo />
      <hr />
      <HookUseRef />
    </div>
  );
}

export default App;
