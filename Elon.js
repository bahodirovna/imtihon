import React from 'react'
import "../css/Elon.css";


const Elon = (props) => {

    const {usePhotos} = props;



  return (
    <div className='Elon main'>
          <div className='container'>
            <div  className='set section'>
                <h2 className='heading'>E'lon Joylashtirish</h2>
                    <ul className='elon list-group'>
                        <li className='elon list-group-item'><span>Kategoriya</span><span>Transport</span>
                                                        <span>Yengil Avtomoshinalar va Moto</span><span><b>Yengil Avtomobillar</b></span>
                        </li>
                    </ul>
            </div>
               
                <div className='about section'>
                    <h3 className='about-heading'>Bizga E'loningiz haqida gapirib bering</h3>
                    <p className='about-parag'>Sarlavha kiriting</p>
                    <div className='inp-box'>
                    <input className='about-inp' type="input" placeholder='Mashinalarni texnik tomondan ahvoli haqida'/>
                     <div className='warning'>
                       <p>
                            Xaridorlarni jalb qilish uchun aniq va qiziqarli sarlavhani o’ylab ko’ring. 
                            Sarlavhada yozilmaydigan bir nechta narsalar mavjud: bosh harflar, telefon raqamlar, email va havolalar
                       </p>
                     </div>
                    </div>


                </div>

                <div className='photo-box section'>
                  <h3 className='photo-heading'>Bizga e'loningiz haqida gapirib bering</h3>
                  <p className='photo-parag'>Birinchi surat e’loningiz asosiy rasmi bo’ladi. 
                     Suratlar tartibini ularning ustiga bosib va olib o’tish bilan o’zgartirishingiz mumkin.
                  </p>
                  <div className='add-box'>
                    <h6 className='add-photo'>Rasmlarni Qo'shish</h6>
                  </div>

                  <div className='photos'>
                    {usePhotos.map((photo)=>(
                      <div key={photo.id} className='pic-box'></div>
                    ))}
                  </div>
                </div>

                 <div className='tavsif section'>
                   <h5 className='tavsif-heading'>Tavsif</h5>
                   <div className='tavsif-box'>
                     <p className='tavsif-parag'>O‘zingizni shu elonni ko‘rayotgan odam o‘rniga qo‘ying va tavsif yozing</p>
                   </div>
                   <div className='tavsif-flex'>
                     <p className='tavsif-text'>Yana kamida 80 ta belgi yozing</p>
                     <p className='tavsif-number'>0/9000</p>
                   </div>
                 </div>

                 <div className='additional-notification section'>
                      <div className='add-btns'>
                      <button type="button" class="btn btn-secondary ">Narx</button>
                      <button type="button" class="btn btn-light">Ayirboshlash</button>
                      </div>
                      <div className='add-dropdawn'>
                        <h5 className='price'>Narx</h5>
                        <span className='d-flex'>
                          <input className='add-inp' type="value"/>
                           <select>
                             <option>So'm</option>
                             <option>Dollar</option>
                             <option>Yevro</option>
                             <option>Rubl</option>
                           </select>
                        </span>
                      </div>
                      <div className='add-mode d-flex'>
                        <p className='add-mode-parag'>Kelishuv asosida</p>
                        <div className="form-check form-switch mx-3">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        </div>
                      </div>

                     
                     <div className='add-not'>
                       <h2 className='add-not-heading'>Qo'shimcha Ma'lumot</h2>

                       <form className='row'>

                            <fieldset disabled className='col-lg-4'>
                              <div class="mb-3">
                                <label for="disabledSelect" class="form-label">Brendi</label>
                                <select id="disabledSelect" class="form-select">
                                  <option>Tanlash</option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="disabledSelect" class="form-label">Ishlab chiqarilgan yili</label>
                                <select id="disabledSelect" class="form-select">
                                  <option></option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="disabledSelect" class="form-label">Rang</label>
                                <select id="disabledSelect" class="form-select">
                                  <option>Tanlash</option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="disabledSelect" class="form-label">Mashina holati</label>
                                <select id="disabledSelect" class="form-select">
                                  <option>Tanlash</option>
                                </select>
                              </div>
                            </fieldset>


                            <fieldset disabled className='col-lg-4'>
                              <div class="mb-3">
                                <label for="disabledSelect" class="form-label">Model</label>
                                <select id="disabledSelect" class="form-select">
                                  <option>Tanlash</option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="disabledSelect" class="form-label">Bosgan yo'li</label>
                                <select id="disabledSelect" class="form-select">
                                  <option>km</option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="disabledSelect" class="form-label">Dvigatel hajmi</label>
                                <select id="disabledSelect" class="form-select">
                                  <option>cm</option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="disabledSelect" class="form-label">Mulkdorlar soni</label>
                                <select id="disabledSelect" class="form-select">
                                  <option>Tanlash</option>
                                </select>
                              </div>
                            </fieldset>


                            <fieldset disabled className='col-lg-4'>
                              <div class="mb-3">
                                <label for="disabledSelect" class="form-label">Kuzov turi</label>
                                <select id="disabledSelect" class="form-select">
                                  <option>Tanlash</option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="disabledSelect" class="form-label">Uzatmalar qutisi</label>
                                <select id="disabledSelect" class="form-select">
                                  <option>Tanlash</option>
                                </select>
                              </div>
                              <div class="mb-3">
                                <label for="disabledSelect" class="form-label">Yoqilg'i turi</label>
                                <select id="disabledSelect" class="form-select">
                                  <option>Tanlash</option>
                                </select>
                              </div>
                            </fieldset>
                      </form>
                     </div>
                          
                          <div className='add-check-box'>
                            <h2 className='add-check-heading'>Qo'shimcha optsiyalar</h2>
                            <div className='row'>


                              <div className='col-lg-4'>
                              <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                  <label class="form-check-label" for="flexCheckDefault">
                                    Bojxonada Rasmiylashtirilgan
                                  </label>
                                </div>
                              <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                  <label class="form-check-label" for="flexCheckDefault">
                                    Elektrik Ko'zgular
                                  </label>
                                </div>
                              </div>


                              <div className='col-lg-4'>
                              <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                  <label class="form-check-label" for="flexCheckDefault">
                                    Elektron oyna ko'targichlar
                                  </label>
                                </div>
                              <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                  <label class="form-check-label" for="flexCheckDefault">
                                    Konditsioner
                                  </label>
                                </div>
                              </div>


                              <div className='col-lg-4'>
                              <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                  <label class="form-check-label" for="flexCheckDefault">
                                    Oxoronna sistema
                                  </label>
                                </div>
                              <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                  <label class="form-check-label" for="flexCheckDefault">
                                    Parktronik
                                  </label>
                                </div>
                              </div>


                            </div>
                          </div>
                 </div>


                       <div className='connect section'>
                         <div className='row'>
                           <div className='col-lg-4'>
                             <h2 className='connect-heading'>Aloqa uchun Ma'lumotlar</h2>
                             <div>
                               <label className='d-block'>Joylashuv</label>
                               <input type="text" placeholder='shahar yoki pochta indeksi'/>
                             </div>
                             <div>
                               <label className='d-block'>Email Manzili</label>
                               <input type="text"/>
                             </div>
                             <div>
                               <label className='d-block'>Telefon Raqami</label>
                               <input type="text"/>
                             </div>
                           </div>
                         </div>
                       </div>
                   
                      
                         <div className='checking section'>
                               <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                  <label class="form-check-label" for="flexCheckDefault">
                                   Mening qurilmaga elektron aloqa va telekommunikatsiya orqali E’lon Group'dan, tegishli
                                   tashkilotlar va ularning sheriklaridan tijorat, hamda marketing xabarlarini (masalan, 
                                   yangiliklar byulleteni, SMS) olishga rozilik bildiraman.
                                  </label>
                                </div>
                         </div>

                         <div className='end section'>
                           <div className='end-btns'>
                               <button type="button" className='first-btn'>Ko'rib chiqish</button>
                               <button type="button" className='second-btn'>E'lon Joylashtirish</button>
                           </div>
                         </div>
                            
                            
          </div>

    </div>





  )
}

export default Elon