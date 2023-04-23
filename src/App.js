import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';

function App() {
  const user = null;
  return (
    <>
    {
      user ? (<Login/>):(
        <div className="App">
        <div className='app_wrapper'>
          <Header />
          <div className='app_body'>
            <Sidebar/>
            <Feed/>
            <Widget/>
          </div>
        </div>
      </div>
      )
    }
    </>
  );
}

export default App;
