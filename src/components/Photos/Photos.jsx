import React from 'react'
import './Photo.css'
import photo_1 from '../../assets/1.jpg'
import photo_2 from '../../assets/2.jpg'
import photo_3 from '../../assets/3.jpg'
import photo_4 from '../../assets/4.jpg'
import photo_5 from '../../assets/5.jpg'
import photo_6 from '../../assets/6.jpg'
import photo_7 from '../../assets/7.jpg'
import photo_8 from '../../assets/8.jpg'

const Photos = () => {
  return (
    <div className="photos ">
        <div className="photo ">
            <img src={photo_1} alt="" />
        </div>
        <div className="photo">
            <img src={photo_2} alt="" />
        </div>
        <div className="photo">
            <img src={photo_3} alt="" />
        </div>
        {/* <div className="photo">
            <img src={photo_4} alt="" />
        </div> */}
        <div className="photo">
            <img src={photo_5} alt="" />
        </div>
        <div className="photo">
            <img src={photo_6} alt="" />
        </div>
        <div className="photo">
            <img src={photo_7} alt="" />
        </div>
        {/* <div className="photo">
            <img src={photo_8} alt="" />
        </div> */}
        

    </div>
  )
}

export default Photos