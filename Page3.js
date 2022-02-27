import React from "react";
import "../css/Page3.css";
import {Link} from "react-router-dom";

const Page3 = (props)=>{

    const {thirdPageState, useActiveThird, onActivesThird, useActiveSecond, useActive} = props;


    return(<div className={useActiveSecond.id == 5 && useActive.id == 1 ? "list-wrapper3 d-inline":"list-wrapper3 d-none"}>
           <ul className="list-group">
           {thirdPageState.map((object) => (<Link to="e'lon">
            <li onClick={()=>onActivesThird(object)} key={object.id} 
            className={useActiveThird===object? "list-group-item active" : "list-group-item"}>
                {object.name}
            </li>
           </Link>
           
           ))}
    </ul>
    </div>
    )
}

export default Page3



