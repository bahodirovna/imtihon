import React from 'react';
import "../css/Page2.css";

const Page2 = (props) => {

     const {secondPageState, useActiveSecond, onActivesSecond, useActive} = props;


  return (<div className={useActive.id == 1 ? "list-wrapper2 d-inline":"list-wrapper2 d-none"}>
                 <ul className='list-group'>
                 {secondPageState.map((secondPage)=>(
                 <li key={secondPage.id} onClick={()=>onActivesSecond(secondPage)} 
                 className={useActiveSecond === secondPage ? 'list-group-item active':'list-group-item'}>{secondPage.name}</li>
        ))}
                </ul>
          </div>
  )
}

export default Page2