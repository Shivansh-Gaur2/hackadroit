import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <div className='app_wrapper'>
        <Header />
        <div className='app_body'>
          <Sidebar/>
        </div>
      </div>
    </div>
  );
}

export default App;
