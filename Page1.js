import React  from 'react'
import "../css/Page1.css";

const Page1 = (props) => {

    const {actives, onActives, useActive} = props;

  return (<div className='list-wrapper'>
                <ul 
                     className="list-group">
                     {actives.map((active)=>(
                     <li onClick={()=>onActives(active)} key={active.id} 
                     className={useActive === active? "list-group-item active":"list-group-item"}>{active.name}</li>
                ))}
           
                </ul>
          </div>
  )
}

export default Page1