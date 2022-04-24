import React from 'react';
import { Route , Routes } from 'react-router-dom';
import About from './pages/About';
import Contak from './pages/Contak';
import Home from './pages/Home';
import LogicPage from './pages/LogicPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contak' element={<Contak />}/>
      <Route path='/logic' element={<LogicPage />}/>
    </Routes>
  );
}

export default App;
