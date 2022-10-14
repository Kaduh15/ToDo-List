import React from 'react';
import Rotas from './routes';
import userStore from './stores/userStore';

function App() {
  const user = userStore((store) => store);
  console.log('🚀 ~ file: App.jsx ~ line 6 ~ user', user);

  return (<Rotas />);
}

export default App;
