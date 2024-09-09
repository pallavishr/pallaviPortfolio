import React from 'react';
import './contact.css';
import UIDesign from '../../Assets/UIDesign.png';
import WebDesign from '../../Assets/WebDesidn.png';
import AppDesign from '../../Assets/appDesign.png';


const Contact = () => {
   return (
     <section id='contactPage'>
         <div id="clients">
             <h1 className="contactPageTitle">My Experiences</h1>
            <p className="clientDesc">
                I have had the opportunity to work with the following organisations :
            </p>
            <div className="clientImgs">
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

       </div>
       <div id="contactPage">
           <h1 className="contactPageTitle">Contact Me</h1>
                           <div className="links">
                     
               </div>
        

 
         </div>
      
     </section>
   )
 }

 export default Contact







