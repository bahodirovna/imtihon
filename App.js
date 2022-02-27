import React, {useState,useEffect} from "react";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import {getfirstPageState} from "../State.js";
import {getSecondPageState} from "../State.js";
import { getThirdPageState } from "../State.js";
import "../css/App.css";
import Elon from "./Elon.js";
import {getPhotos} from "../State.js";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./Home.js";
import NotFound from "./NotFound.js";
import Page1 from "./Page1";







function App() {

  const [firstPageState, setFirstPageState] = useState([]);
  const [secondPageState, setSecondPageState] =  useState([]);
  const [thirdPageState, setThirdPageState] = useState([]);
  const [useActive, setUseActive] = useState("");
  const [useActiveSecond, setUseActiveSecond] = useState("");
  const [useActiveThird, setUseActiveThird] = useState("");
  const [usePhotos, setUsePhotos] = useState([]);


useEffect(()=>{
  let firstState = getfirstPageState();
      setFirstPageState(firstState); 
  let secondState = getSecondPageState();
      setSecondPageState(secondState);  
  let thirdState = getThirdPageState();
      setThirdPageState(thirdState);
  let photos = getPhotos();
      setUsePhotos(photos);
},[])



    
  const handleActives = (object)=>{
    setUseActive(object);
  };

  const handleActivesSecond = (secondPage)=>{
    setUseActiveSecond(secondPage);
  }

  const handleActivesThird = (object)=>{
    setUseActiveThird(object);
  }


 



  return (<Router>
   <div className="App main">
      <Nav />
        
        <Routes>
          <Route path="/homePage" element={ <Home 
            firstPageState={firstPageState}
            handleActives={handleActives}
            useActive={useActive}
            secondPageState={secondPageState}
            useActiveSecond={useActiveSecond}
            handleActivesSecond={handleActivesSecond}
            thirdPageState={thirdPageState}
            useActiveThird={useActiveThird}
            handleActivesThird={handleActivesThird}
              />}/>
        </Routes>

        <Routes>
          <Route path="/" element={<Navigate to="/homePage"/>}/>
        </Routes>
       

        <Routes>
          <Route path="/homePage/e'lon" element={<Elon usePhotos={usePhotos}/>}/>
        </Routes>

        <Routes>
          <Route path="/not-found" element={<NotFound/>}/>
        </Routes>

        {/* <Routes>
          <Route path="*" element={<Navigate to="/not-found"/>}/>
        </Routes> */}

      <Footer />
    </div>
    </Router>
  )
}

export default App;



















