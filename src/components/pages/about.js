import React from 'react';
import profilePic from "../../../static/assets/images/bio/f45.jpg";

export default function() {
  return (
    <div className='content_page_wrapper'>
      <div className='left-column' style={{ background: "url(" + profilePic + ") no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} />

      
      <div className='right-column'>
      As a certified full-stack developer with a versatile set of skills in geographic information systems, fitness, survey, land development and the military; I’m looking to obtain a position that increases my expertise in managing, visualizing, and analyzing data IOT design web applications to help solve problems in everyday life.      

      </div>
    </div>
  );
}
