import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function SocialMedia() {
  return (
    <div className='app__social'>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsLinkedin />
      </div>
    </div>
  );
}

export default SocialMedia;
