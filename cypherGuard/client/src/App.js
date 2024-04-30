import React from 'react';
import Home from './components/Home';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Routes>
      <Route exact path ="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />}/>
      <Route path="/terms" element={<Terms/>} />
    </Routes>
    )
}

export default App;
