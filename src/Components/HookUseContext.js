import React from 'react';
import ParentComponent from './ParentComponent';

export const ExampleContext = React.createContext();

function HookUseContext() {
  return (
    <ExampleContext.Provider value={{ color: 'red' }}>
      <div>
        <ParentComponent />
      </div>
    </ExampleContext.Provider>
  );
}

export default HookUseContext;
