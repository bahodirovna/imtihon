import React from 'react'
import Back from "./Back.js";
import Page1 from "./Page1.js";
import Page2 from "./Page2.js";
import Page3 from "./Page3.js";
import Check from "./Check.js";

const Home = (props) => {
    const {firstPageState,
        handleActives,
        useActive,
        secondPageState,
        useActiveSecond,
        handleActivesSecond,
        thirdPageState,
        useActiveThird,
        handleActivesThird,} = props;

  return (<div> 
      <Back />
    <div className="comp container d-flex">
      
      <Page1 state={firstPageState}
           onActives={handleActives}
           useActive={useActive}
             />
      
      <Page2 secondPageState={secondPageState}
           useActiveSecond={useActiveSecond}
           onActivesSecond={handleActivesSecond}
           useActive={useActive}
             /> 

      <Page3 thirdPageState={thirdPageState}
             useActiveThird={useActiveThird}
             onActivesThird={handleActivesThird}
             useActiveSecond={useActiveSecond}
             useActive={useActive}
             />  

       <Check useActiveSecond={useActiveSecond}
               useActive={useActive}
             />                 
      
    </div>
    </div>
  )
}

export default Home