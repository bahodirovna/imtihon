
import React from 'react';
import "../css/Footer.css"


const Footer = () => {
  return <div>
    <footer>
      <div className='container'>
      <div className='boxes d-flex'>

        <div className='box box-1 d-flex'>
        <img src='../Sahbndn.img/Call.png'/>
        <div>
          <p className='text'>Call center</p>
          <p className='number'>+99897 123 45 67</p>
        </div>
        </div>

        <div className='box box-2 d-flex '>
        <img src='../Sahbndn.img/Gmail.png'/>
        <div>
          <p className='text'>Call center</p>
          <p className='number'>+99897 123 45 67</p>
        </div>
        </div>

        <div className='box box-3'>
           <button>
             <span><img src="../Sahbndn.img/Frame 178.png"/></span>
             <i className="fa fa-angle-down" aria-hidden="true"></i>
           </button>
        </div>

      </div>
      <hr/>
      <p className='copyright'>Copyright &copy; 2000 - 2021 e'lon.uz</p>
      </div>
    </footer>
  </div>;
};

export default Footer;
