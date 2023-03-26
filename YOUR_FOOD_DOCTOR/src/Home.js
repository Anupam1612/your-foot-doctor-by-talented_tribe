import React from 'react'
import { Link } from 'react-router-dom'
import newbg from './images/bg1.png'
import './App.css'
import ImgBg from './images/img_bg.png'

function Home() {
  return (
    <div className='home'> 
        <div className='foot_img'>
            <img src={newbg} alt='foot' className='foot'/>
        </div>
        <h1 className='home_txt'>Welcome, to Flat Foot checker</h1>
        <Link to='/upload'><button className='btn'>Upload your foot images</button></Link>
        <span className='span'>OR</span>
        <Link to='/capture'><button className='btn'>Capture your foot images</button></Link>       
    </div>
  )
}

export default Home
