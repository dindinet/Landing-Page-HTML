import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Landing Page</title>
        <meta property="og:title" content="All we have to tell you" />
      </Helmet>
      <div data-role="Header" className="about-navbar-container">
        <div className="about-navbar">
          <img
            alt="image"
            src="/playground_assets/nana-200h.png"
            className="about-image"
          />
          <div className="about-container1">
            <div className="about-links-container">
              <a href="#resources" className="about-link anchor">
                Resources
              </a>
              <a href="#inspiration" className="about-link1 anchor">
                Inspiration
              </a>
              <a href="#process" className="about-link2 anchor">
                Process
              </a>
              <a href="#ourstory" className="about-link3 anchor">
                Nostro Historia
              </a>
            </div>
            <div className="about-left-side">
              <div data-type="BurgerMenu" className="about-burger-menu">
                <svg viewBox="0 0 1024 1024" className="about-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="about-right-side">
            <button className="about-cta-btn button anchor">START NOW</button>
          </div>
          <div data-type="MobileMenu" className="about-mobile-menu">
            <div className="about-container2">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="about-image1"
              />
              <div data-type="CloseMobileMenu" className="about-close-menu">
                <svg viewBox="0 0 1024 1024" className="about-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="about-links-container1">
              <a href="#resources" className="about-link4 anchor">
                Resources
              </a>
              <a href="#inspiration" className="about-link5 anchor">
                Inspiration
              </a>
              <a href="#process" className="about-link6 anchor">
                Process
              </a>
              <a href="#ourstory" className="about-link7 anchor">
                Our story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
