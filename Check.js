import React from 'react'
import "../css/Check.css";

const Check = (props) => {

const {useActiveSecond, useActive} = props;

  return (
    <div className={useActiveSecond.id == 4 && useActive.id == 1? 'check-box d-inline' : 'check-box d-none'}>
        <div className='container'>
            <div className='check-text'>
                {/* <i class="fa fa-check-circle-o" aria-hidden="true"></i> */}
                <img src="../SahbndnImg/Vector (2).png"/>
                <p className='parag text-center'>
                    Kategoriyani tanlash <br/> tugallandi
                </p>
            </div>
            <div className='btn-wrapper'>
            <button className='check btn btn-primary'>Davom Etish</button>
            </div>

        </div>
    </div>
  )
}

export default Check
















