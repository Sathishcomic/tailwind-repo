import React from 'react';
import Header from './components/Header';
import Courses from './components/Courses';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <Courses />
          <About />
          <Contact />
        </main>
      </div>
  );
}

export default App;
