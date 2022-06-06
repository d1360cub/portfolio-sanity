import React, { useState, useEffect } from 'react';
import { images } from '../../constants';
import AppWrap from '../../wrapper';
import MotionWrap from '../../wrapper/MotionWrap';
import { client } from '../../client';
import './Footer.scss';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };
    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className='head-text'>Take a coffe and chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:diegofernandocubides@gmail.com' className='p-text'>
            hello@
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +573143569228' className='p-text'>
            +573143569228
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app_flex'>
            <input
              className='p-text'
              name='name'
              type='text'
              placeholder='Your name'
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className='app_flex'>
            <input
              className='p-text'
              name='email'
              type='email'
              placeholder='Your email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
