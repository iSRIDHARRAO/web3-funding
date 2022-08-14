import Main from "./Main";
import Success from './Success';
import Failure from './Failure';
import Footer from './Footer';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import React from "react";
import Blocks from './Blocks';
import RaiseFunds from './RaiseFunds';
import How from './How';
import Browse from './Browse';
import './App.css';
import Header from './Header.js';
import ProfileForm from "./ProfileForm";
function App() {
  return (
    <Router> 
      <div className="App">
      
      <Header/>

      <Routes>
      <Route exact path='/' element={<><Main/><Blocks/><Footer/></>}/>
      <Route exact path='/profile' element={<ProfileDetails/>}/>
      <Route exact path='/profileForm' element={<ProfileForm/>}/>
      <Route exact path='/how' element={<How/>}/>
      <Route exact path='/browse' element={<Browse/>}/>
      <Route exact path='/success' element={<Success/>}/>
      <Route exact path='/failure' element={<Failure/>}/>
      <Route exact path='/raise' element={<RaiseFunds/>}/>
      </Routes>
      
    
      
    </div>
    </Router>
  );
}

export default App;



