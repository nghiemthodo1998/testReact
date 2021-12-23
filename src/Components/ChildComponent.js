import React, { useContext } from 'react';
import { ExampleContext } from './HookUseContext';

function ChildComponent() {
  const { color } = useContext(ExampleContext);
  return <div>Màu {color}</div>;
}

export default ChildComponent;
