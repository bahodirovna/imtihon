import React from 'react'
import Nav from "./Nav.js";
import "../css/Elon.css";

const Elon = () => {
  return (
    <div className='Elon section'>
          <Nav />
          <div className='container'>
               <h2 className='heading'>E'lon Joylashtirish</h2>
                <ul className='elon list-group'>
                    <li className='elon list-group-item'><span>Kategoriya</span><span>Transport</span>
                                                    <span>Yengil Avtomoshinalar va Moto</span><span><b>Yengil Avtomobillar</b></span>
                    </li>
                </ul>
          </div>





    </div>
  )
}

export default Elon