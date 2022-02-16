import React from 'react'
import "../css/Check.css";

const Check = () => {
  return (
    <div className='check-box'>
        <div className='container'>
            <div className='check-text'>
                {/* <i class="fa fa-check-circle-o" aria-hidden="true"></i> */}
                <img src="../SahbndnImg/Vector (2).png"/>
                <p className='parag text-center'>
                    Kategoriyani tanlash <br/> tugallandi
                </p>
            </div>
            <div className='btn-wrapper'>
            <button className='btn btn-primary'>Davom Etish</button>
            </div>

        </div>
    </div>
  )
}

export default Check
















