import React from 'react';
import './App.css';
import Profile from './profile/Profile';

function App() {

  const handleName = (name) => alert(`My name is ${name}`);

  return (

    <div className="App">
    {/*calling the Profile component in the App component*/}

    <Profile fullName= "Wafa Slim" bio = "I'm 35 years old" profession = "Energy Engineer" handleName={handleName}>
      <img src='/Wafa.png' alt='Wafa' style={{width:150,borderRadius:5}}/>
    </Profile>   
    
    </div>
  );
}

export default App;
