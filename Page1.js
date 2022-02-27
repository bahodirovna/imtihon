import React  from 'react'
import "../css/Page1.css";

const Page1 = (props) => {

    const {state, onActives, useActive} = props;

  return (<div className='list-wrapper1'>
                <ul 
                     className="list-group">
                     {state.map((object)=>(
                     <li onClick={()=>onActives(object)} key={object.id} 
                     className={useActive === object? "list-group-item active":"list-group-item"}>{object.name}</li>
                ))}
           
                </ul>
          </div>
  )
}

export default Page1