import React, { useEffect } from 'react';
import './about.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Chef from '../../assets/chef.png';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='about'>
      <div className='about-container'>
        <div className='about-header'>
          <h1>we serve quality</h1>
        </div>
      </div>
      <div className='about-random'>
        <div className='random-container' data-aos='fade-up'>
          <h1>
            <span>Our</span>
            <br></br>
            delicious menu
          </h1>
          <p>
            Diamond is a Professional restaurant Platform. Here we will provide
            you only interesting content, which you will like very much. We're
            dedicated to providing you the best of restaurant, with a focus on
            dependability and restaurant.
            <br></br>
            <br></br>We're working to turn our passion for restaurant into a
            booming online website. We hope you enjoy our restaurant as much as
            we enjoy offering them to you. I will keep posting more important
            posts on my Website for all of you. Please give your support and
            love.
          </p>
        </div>
      </div>
      <div className='inovation' data-aos='fade-up'>
        <img
          data-aos='fade-up'
          src='https://images.pexels.com/photos/2497903/pexels-photo-2497903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='inovation'
        />
        <h3>inovation</h3>
        <div className='line'></div>
        <p>
          Evidence supports creativity and innovation as important drivers of
          firm performance.
        </p>
      </div>
      <div data-aos='fade-up' className='inovation'>
        <img
          data-aos='fade-up'
          src='https://images.pexels.com/photos/3296395/pexels-photo-3296395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='inovation'
        />
        <h3>value</h3>
        <div className='line'></div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
          inventore vel amet? Dolore, iste possimus.
        </p>
      </div>
      <div className='inovation' data-aos='fade-up'>
        <img
          src='https://images.pexels.com/photos/5018987/pexels-photo-5018987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='inovation'
        />
        <h3>motivation</h3>
        <div className='line'></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, velit
          perspiciatis. Temporibus expedita a totam.
        </p>
      </div>
      <div className='inovation' data-aos='fade-up'>
        <img
          data-aos='fade-up'
          src='https://images.pexels.com/photos/5019004/pexels-photo-5019004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='inovation'
        />
        <h3>quality</h3>
        <div className='line'></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, non.
        </p>
      </div>
      <div className='team'>
        <div className='team-container'>
          <h1>
            <span>Our</span>
            <br></br>team members
          </h1>
          <div className='team-member' data-aos='fade-up'>
            <img src={Chef} alt='chef' />
            <h3>
              <span>Chef</span>
              <br></br>Alan Parker
            </h3>
          </div>
          <div className='team-member' data-aos='fade-up'>
            <img src={Chef} alt='chef' />
            <h3>
              <span>Chef</span>
              <br></br>Alan Parker
            </h3>
          </div>
          <div className='team-member' data-aos='fade-up'>
            <img src={Chef} alt='chef' />
            <h3>
              <span>Chef</span>
              <br></br>Alan Parker
            </h3>
          </div>
          <div className='team-member' data-aos='fade-up'>
            <img src={Chef} alt='chef' />
            <h3>
              <span>Chef</span>
              <br></br>Alan Parker
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
