import React from 'react';
import Dots from '../components/Dots';
import SocialMedia from '../components/SocialMedia';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className='app__wrapper app__flex'>
          <Component />
        </div>
        <Dots active={idName} />
      </div>
    );
  };

export default AppWrap;
