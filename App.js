import React, {useState} from "react";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import Page1 from "./Page1.js";
import {activeState} from "../State.js";
import "../css/App.css";
import {getSecondPageState} from "../State.js";
import Page2 from "./Page2.js";
import Back from "./Back.js";
import Check from "./Check.js";
import Elon from "./Elon.js";







function App() {

  const [actives] = useState(activeState());
  const [useActive, setUseActive] = useState("");
  const [useActiveSecond, setUseActiveSecond] = useState("");
  const [secondPageState] =  useState(getSecondPageState());
    
  const handleActives = (active)=>{
    setUseActive(active);
  };

  const handleActivesSecond = (secondPage)=>{
    setUseActiveSecond(secondPage);
  }

  return (<div className="App main">

      <Nav />
      <Back />
       <div className="comp container d-flex">
         <div>
         <Page1 actives={actives}
              onActives={handleActives}
              useActive={useActive}
                />
         </div>
         <div>
         <Page2 secondPageState={secondPageState}
              useActiveSecond={useActiveSecond}
              onActivesSecond={handleActivesSecond}
                /> 
         </div>
         <div>
         <Check />      
         </div>
       </div>
      <Footer />
        <br/>

      <Elon />

    </div>
  )
}

export default App;
