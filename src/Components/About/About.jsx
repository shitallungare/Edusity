import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About() {
  return (
    <div className='about'>
      <div className="about-left">
        <img className='about-img' src={about_img} alt=""  />
        <img className='play-icon' src={play_icon} alt="" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>A university is an institution of higher education, usually comprising a college of liberal arts and sciences and graduate and professional schools and having the authority to confer degrees in various fields of study. A university differs from a college in that it is usually larger, has a broader curriculum, and offers graduate and professional degrees in addition to undergraduate degrees.</p>
        <p>With a focus innovation, hands-on learning, and personalized meaningful impact in classrooms, schools, and communities.</p>
        <p>Whether you apie to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaning the future of education.</p>
      </div>
    </div>
  )
}

export default About;
