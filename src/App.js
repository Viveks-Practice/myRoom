import React from 'react';
import InterestCategory from './components/InterestCategory';
import AboutMe from './components/AboutMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Social Media Profile</h1>
      <AboutMe />
      <div className="grid-container">
        <InterestCategory title="Favorite Music" />
        <InterestCategory title="Hobbies" />
        <InterestCategory title="Sports" />
        <InterestCategory title="Books" />
        {/* Add more categories as needed */}
      </div>
    </div>
  );
}

export default App;
