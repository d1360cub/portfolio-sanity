/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function Dots({ active }) {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
        (element, index) => (
          <a
            href={`#${element}`}
            key={element + index}
            style={active === element ? { backgroundColor: '#313BAC' } : {}}
            className='app__navigation-dot'
          />
        )
      )}
    </div>
  );
}

export default Dots;
