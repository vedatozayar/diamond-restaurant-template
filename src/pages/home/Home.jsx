import React, { useEffect } from 'react';
import './home.scss';
import Button from '../../components/button/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBowlFood,
  faQuoteRight,
  faSeedling,
  faUtensils,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='home'>
      <div className='home-container'>
        <div className='container'>
          <div className='content'>
            <h1>delicious food</h1>
            <p>Diamond is a restaurant,bar and coffee located on London</p>
            <Button className='button' text={'ORDER ONLINE'} />
          </div>
          <div className='arrow'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className='greetings'>
        <div
          data-aos='fade-up'
          data-aos-anchor-placement='top-bottom'
          className='message'
        >
          <h2>
            <span>Why diamond?</span>
            <br></br>
            sweet & Elegant time
          </h2>
          <p>
            Our mission is to give our customers a place to celebrate life’s
            special moments by offering the best food, service, and ambiance.
            The smile on our customers face has always been our first priority
            and we work hard to achieve that.
          </p>
        </div>
        <div className='image-container'>
          <img
            src='https://images.pexels.com/photos/923368/pexels-photo-923368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='/'
          />
        </div>
      </div>
      <div className='menu-features'>
        <div className='container' data-aos='fade-up'>
          <div className='header'>
            <h2>
              <span>Explore</span>
              <br></br>Our premium menu
            </h2>
          </div>
          <div className='features-card'>
            <div className='card' data-aos='fade-up'>
              <FontAwesomeIcon className='icon' icon={faBowlFood} />
              <h3>Daily & Fresh</h3>
              <p>
                We only sell delicious, affordable food that moves our customers
                forward and won’t hold them back. We make sure our food is daily
                and fresh.
              </p>
            </div>
            <div className='card' data-aos='fade-up'>
              <FontAwesomeIcon className='icon' icon={faUtensils} />
              <h3>Good food good mood</h3>
              <p>
                Our food is always delicious. It is difficult and need a hard
                work to be your favorite restourant so we take our work serious.
              </p>
            </div>

            <div className='card' data-aos='fade-up'>
              <FontAwesomeIcon className='icon' icon={faSeedling} />
              <h3>Quality ingredients</h3>
              <p>Our fresh and organic menu will make you feel special</p>
            </div>
          </div>
        </div>
        <Button className='button' text={'See menu'} />
      </div>
      <div className='testimonial'>
        <div data-aos='fade-up' className='container'>
          <div className='header'>
            <h2>
              <span>our</span>
              <br></br>clients
            </h2>
          </div>
          <div className='testi-cards'>
            <div className='card'>
              <FontAwesomeIcon className='icon' icon={faQuoteRight} />
              <p>
                It’s a great experience. The ambiance is very welcoming and
                charming. Amazing wines, food and service. Staff are extremely
                knowledgeable and make great recommendations.
              </p>
              <h3>ILONA R</h3>
              <h4>doctor</h4>
            </div>
            <div className='card'>
              <FontAwesomeIcon className='icon' icon={faQuoteRight} />
              <p>
                This place is great! Atmosphere is chill and cool but the staff
                is also really friendly. They know what they’re doing and what
                they’re talking about, and you can tell making the customers
                happy is their main priority. Food is pretty good, some italian
                classics and some twists, and for their prices it’s 100% worth
                it.
              </p>
              <h3>JAMES J</h3>
              <h4>engineer</h4>
            </div>
            <div className='card'>
              <FontAwesomeIcon className='icon' icon={faQuoteRight} />
              <p>
                Excellent food. Menu is extensive and seasonal to a particularly
                high standard. Definitely fine dining. It can be expensive but
                worth it and they do different deals on different nights so it’s
                worth checking them out before you book. Highly recommended.
              </p>
              <h3>BUSE O</h3>
              <h4>lawyer</h4>
            </div>
            <Button text={'READ MORE'} />
          </div>
        </div>
      </div>
      <div className='gallery'>
        <div className='container'>
          <div className='header'>
            <h2>
              <span>our</span>
              <br></br>gallery
            </h2>
          </div>
          <div className='image-container'>
            <div className='image'>
              <img
                src='https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
            </div>
            <div className='image'>
              <img
                src='https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
            </div>
            <div className='image'>
              <img
                src='https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
            </div>
            <div className='image'>
              <img
                src='https://images.pexels.com/photos/1267315/pexels-photo-1267315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
            </div>
            <div className='image'>
              <img
                src='https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
            </div>
            <div className='image'>
              <img
                src='https://images.pexels.com/photos/1449775/pexels-photo-1449775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
            </div>
            <div className='image'>
              <img
                src='https://images.unsplash.com/photo-1511017049469-e0d1ba0219a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <div className='map'>
        <div className='info'>
          <h2 className='header'>
            <span>findus</span>
            <br></br>our address
          </h2>
          <div className='address'>
            <div className='icon-container'>
              <FontAwesomeIcon className='icon' icon={faLocationDot} />
            </div>
            <p>2603 Evergreen Lane,CA,90280</p>
          </div>
        </div>
        <div className='map-container'>
          <div className='map-cont'>
            <img
              src='https://d33wubrfki0l68.cloudfront.net/2b44292406de53564def263a6e986431b32a8163/70618/assets/img/snz.png'
              alt='map'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
