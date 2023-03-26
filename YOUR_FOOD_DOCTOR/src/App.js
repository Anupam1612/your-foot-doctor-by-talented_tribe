import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Upload from './Upload';
import Home from './Home';
import Capture from './Capture';
import yfd_logo from './images/yfd_logo.png'
import wave from './images/wave1.png';


function App() {
  return (
    <Router>
      <div className='yfd_logo'>
        <Link to='/'><img src={yfd_logo} className='logo'/></Link>
      </div>
      <div className='yfd'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/upload' element={<Upload />} />
          <Route exact path='/capture' element={<Capture />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
