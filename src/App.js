
import './App.css';
// import Header from './Dev2prod/Header'  
import About from './Dev2prod/About'
import Servicesk from './Dev2prod/Servicesk'
import Choose from './Dev2prod/Choose'
import React,{ Component } from 'react';
import Chooseing from './Dev2prod/Chooseing';
import Mobile from "./Dev2prod/Mobile"
import Question from './Dev2prod/Question';
import Footer from "./Dev2prod/Footer"
import ExcelSheet from './Dev2prod/ExcelSheet'
import Dbserver from './Dev2prod/Dbserver'

function App() {
  return (
   <React.Fragment>
  
     {/* <Header/>  */}
     {/* <Dbserver/> */}
     <About/>
     <Servicesk/>
     <Choose/>
     <Chooseing/>
     <Mobile/>
     <Question/>
     <Footer/>
     <ExcelSheet/>
    
   </React.Fragment>
  );
}

export default App;



