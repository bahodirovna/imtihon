import React from 'react';
import "../css/Page2.css";

const Page2 = (props) => {

     const {secondPageState, useActiveSecond, onActivesSecond} = props;


  return (<div className='list-wrapper'>
                 <ul className='list-group'>
                 {secondPageState.map((secondPage)=>(
                 <li onClick={()=>onActivesSecond(secondPage)} 
                 className={useActiveSecond === secondPage ? 'list-group-item active':'list-group-item'}>{secondPage.name}</li>
        ))}
                </ul>
          </div>
  )
}

export default Page2