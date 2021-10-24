import React from 'react';
import './assets/scss/main.scss';
import Header from './components/Header'; 
import Main from './components/Main';

function App() {
  return (
    <div className="App">
       <Header collapsed={true} />
       <Main />
    </div>
  );
}

export default App;
