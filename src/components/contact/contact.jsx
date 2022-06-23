import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iecm02n', 'template_zokpahf', form.current, 'HH9WM6g8bCsZSVgWM')
    e.target.reset() 
  
  
  // .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>goodnessIgunma1@gmail.com</h6>
            <a href='mailto:goodnessigunma1@gmail.com' target="_blank">Send a Message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Igudy</h5>
            {/* Add message infomation */}
            <a href='https://m.me/goodness.igudy' target="_blank">Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+234-81-082-51426</h5>
            <a href='https://wa.link/jnvn9r' target="_blank">Send a Message</a>
          </article>
        </div>

        {/* End of contact options */}

        <form ref={form} onSubmit={sendEmail}>
        {/* <form> */}
           <input type="text" name="name" placeholder='Your Full Name' required />
           <input type="text" name="subject" placeholder='Subject' required />
           <input type="email" name="email" placeholder='Your Email' required />
           <textarea name='message' rows="7" placeholder='Your Message' required />
           <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact