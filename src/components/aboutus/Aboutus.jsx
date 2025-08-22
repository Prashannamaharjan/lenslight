import React from 'react'
import './Aboutus.css';
import Aboutuslogo from '../../assets/images.png';

const Aboutus = () => {
  return (
    <div>
    <img src={Aboutuslogo} alt="" className='Aboutuslogo'/>
    <div className='Aboutustext'>We are Lens Light Nepal, a passionate team of 7 creative photographers and videographers based in Kathmandu, Nepal. As freelancers, we specialize in capturing unforgettable moments through both photography and videography, bringing stories to life with our lens. Our services cover a wide range of events including weddings, birthdays, receptions, meetings, documentaries, and more. With a keen eye for detail and a love for storytelling, our team is dedicated to delivering high-quality visuals that reflect the emotions, culture, and essence of every occasion we document.</div>
    </div>
  )
}

export default Aboutus