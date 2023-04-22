import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
      <div className='app_wrapper'>
        <Header />
        <div className='app_body'>
          <Sidebar/>
          <Feed/>
        </div>
      </div>
    </div>
  );
}

export default App;
