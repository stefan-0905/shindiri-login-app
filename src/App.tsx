import React from 'react';
import './App.css';

import ProtectedRoutes from './components/Routes/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <ProtectedRoutes />
    </div>
  );
}

export default App;
