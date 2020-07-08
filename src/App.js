import React from 'react';
import Background from './Background'
import Name from './Name'
import Social from './Social'


function App() {
  return (
      <div className="wrapper">
       <div className="body-content">
        <div className="background">
         <Background />
        </div>
         <Name />
        </div>
        <div className="footer">
         <Social />
        </div>
      </div>
  );
}

export default App;
