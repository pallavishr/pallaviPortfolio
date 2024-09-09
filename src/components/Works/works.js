import React from 'react';
import './works.css';
import Portfolio1 from '../../Assets/girl1.png';
import Portfolio2 from '../../Assets/girl2.jpg';
import Portfolio3 from '../../Assets/girl3.png';
import Portfolio4 from '../../Assets/girl4.jpg';
import Portfolio5 from '../../Assets/girl5.png';
import Portfolio6 from '../../Assets/girl6.png';



const Works =() => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Projects</h2>
        <span className="worksDesc">I have a strong foundation in building responsive and visually appealing web interfaces. My attention to detail ensures pixel-perfect designs.</span>
        <div className="worksImgs">
          <img src={Portfolio1} alt="..." className="worksImg" />
          <img src={Portfolio2} alt=".." className="worksImg" />
          <img src={Portfolio3} alt=".." className="worksImg" />
          <img src={Portfolio4} alt=".." className="worksImg" />
          <img src={Portfolio5} alt=".." className="worksImg" />
          <img src={Portfolio6} alt=".." className="worksImg" />

        </div>
        <button className="worksBtn">See More</button>
    </section>
  );
}

export default Works
