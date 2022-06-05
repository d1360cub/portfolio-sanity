import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AppWrap from '../../wrapper';
import { urlFor, client } from '../../client';
import './About.scss';

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <h2 className='head-text'>
        I know That <span>Good Development</span> means{' '}
        <span>Good Business</span>{' '}
      </h2>

      <div className='app__profiles'>
        {abouts.map((element, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={element.title + index}
          >
            <img src={urlFor(element.imgUrl)} alt={element.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {element.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {element.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(About, 'about');
