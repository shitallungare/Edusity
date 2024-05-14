import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import name_icon from '../../assets/name-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ad4e4543-84e1-4c97-8059-d5b738055679");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };




    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to drop by our campus during office hours or give us a call. If you prefer, you can also send us an email, and we'll respond promptly. Your feedback and inquiries are valuable to us, and we're committed to providing you with the support you need.</p>
                <ul>
                    <li><img src={name_icon} alt="" />Nick LeBron</li>
                    <li><img src={phone_icon} alt="" />9561424156</li>
                    <li > <img src={mail_icon} alt="" />Nick@gmail.com</li>
                    <li><img src={location_icon} alt="" />Mr John Smith. 132, My Street, Kingston, New York 12401.</li>

                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label> Your Name </label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label> Phone Number </label>
                    <input type="tel" name='phone' placeholder='Enter your Mobile number' required />
                    <label> Write Your Messages Here </label>
                    <textarea name="message"  rows="6" placeholder='Enter Your Message' required></textarea>
                    <button type='Submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
            

    </div>
  )
}

export default Contact