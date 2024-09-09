import React from 'react';
import './skills.css';
import UIDesign from '../../Assets/UIDesign.png';
import WebDesign from '../../Assets/WebDesidn.png';
import AppDesign from '../../Assets/appDesign.png';


const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do?</span>
        <span className="skillDesc">I am a skilled Web Designer with profiency in React, JavaScript, Node, MongoDb, HTML, CSS</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Application Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Skills
