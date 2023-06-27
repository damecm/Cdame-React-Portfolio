import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactPic from "../../../static/assets/images/auth/dameframe4.png";

export default function() {
  return (
    <div className='content_page_wrapper'>
      <div className='left-column' style={{ background: "url(" + contactPic + ") no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className='right-column'>
        <div className='contact-bullet-points'>
          
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className='text'>damecullen24@gmail.com</div>
          </div>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div className='text'>Austin, TX</div>
          </div>
        </div>
      </div>
    </div>
  );
}
