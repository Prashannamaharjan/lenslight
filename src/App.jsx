import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/home'
import Photos from './components/Photos/Photos'
import Title from './components/Title/Title'
import Photographer from './components/Photographer/Photographer'
import Aboutus from './components/aboutus/Aboutus'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <div className="container">
      <Title subTitle='Our Photos' title='Photos Shoot By Our Team'/>
      <Photos />
      <Title title='Our Team Members' subTitle="Photographer"/>
      <Photographer />
      <Title title='About Us'/>
      <Aboutus />
      <Title subTitle='Contact Us' title="Get In Touch"/>
      <Contact />
      </div>

    </div>
  )
}

export default App