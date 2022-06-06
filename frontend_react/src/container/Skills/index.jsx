import React, { useState, useEffect } from 'react';
import ReactToolTip from 'react-tooltip';
import { motion } from 'framer-motion';
import AppWrap from '../../wrapper';
import MotionWrap from '../../wrapper/MotionWrap';
import { urlFor, client } from '../../client';
import './Skills.scss';

function Skills() {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>
        My developer <span>skills</span> section
      </h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((element) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={element.name}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: element.bgColor }}
              >
                <img src={urlFor(element.icon)} alt={element.name} />
              </div>
              <p className='p-text'>{element.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experience.map((expyear) => (
            <motion.div className='app__skills-exp-item' key={expyear.year}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{expyear.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {expyear.works.map((item) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={item.name}
                      key={item.name}
                    >
                      <h4 className='bold-text'>{item.name}</h4>
                      <p className='p-text'>{item.company}</p>
                    </motion.div>
                    <ReactToolTip
                      id={item.name}
                      effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                    >
                      {item.desc}
                    </ReactToolTip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
