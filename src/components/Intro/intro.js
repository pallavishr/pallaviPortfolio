import React from 'react';
import './intro.css';
import bg from '../../Assets/dp1.jpg';
import btnImg from '../../Assets/download.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello...</span>
            <span className="introText">I'm <span className="introName">Pallavi Sharma</span>
            <br/>
            React Developer
            </span>
            <p className="introPara"></p>
            <Link><button className='btn' href="src\Assets\CV_PALLAVI (1).pdf" download="CV_PALLAVI"><img src={btnImg} alt="Download" className='btnImg' />Download CV</button></Link>
        </div>
        <img src={bg} alt="profile" className='bg' />
    </section>
    </div>
  )
}

export default Intro
