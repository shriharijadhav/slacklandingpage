import React from 'react'
import '../styles/homepage.css';
import { IoMdArrowForward } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { GoArrowRight } from 'react-icons/go';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

import rightSideImage from "../assets/images/rightside.png"

import brandNames from "../assets/images/brandNames.png"
import { AiOutlineClose } from 'react-icons/ai';
import { FaHandPaper } from 'react-icons/fa';
const Homepage = () => {
  return (
    <div className='homepageContent'>
        <div className='notificationBanner'>
            <div className='notificationBanner_left'>
            <p>Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world. </p>
            <div className='CTA_letsGo'>
            <p>Let's go</p>
            <FaArrowRightLong />
            </div>
            </div>
            <div className='notificationBanner_right'>
            <RxCross2 size={20} />
            </div>
        </div>

        <div className='heroSection'>
            <div className='heroSection_left'>
                <span className='heading'>Slack is where the future works.</span>
               <div className='headingDescription'>
               <span >Transform the way you work with one place for </span>
               <span>everyone and everything you need to get stuff done.</span>
               </div>
                <div className='CTA_buttons'>
                    <button className='btnVariantOne withExtraPadding'>
                        Try for free
                    </button>
                    <button className='signupWithGoogleBtn'>
                        <div className='googleIconDiv'>
                        <FcGoogle size={20} />

                        </div>
                        <div className='googleText'>
                            Sign up with google
                        </div>
                    </button>
                </div>
            </div>
            <div className='heroSection_right'>
                <img src={rightSideImage} alt="slackImg" />
            </div>
        </div>

        <div className='brandNames'>
                 <img src={brandNames} alt="slackImg" />
        </div>

        <div className='heroSection reversed'>
            <div className='heroSection_left'>
                <span className='heading'>Now is your moment to build a better tomorrow.</span>
               <div className='headingDescription'>
               <span >We've seen what future can be. Now it's time to decide </span>
               <span>what it will be.</span>
               </div>
                <div className='CTA_buttons'>
                    <button className='btnVariantTwo'>
                       Watch Video
                    </button>
                </div>
            </div>
            <div className='heroSection_right'>
                <img src={rightSideImage} alt="slackImg" />
            </div>
        </div>

        <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          This website uses cookies to enhance user experience and to analyze
          performance and traffic on our website. We also share information
          about your use of our site with our social media, advertising, and
          analytics partners.{" "}
          <a href="#" className="more-info">More Info</a>
        </p>
        <button className="close-btn" >
          <AiOutlineClose size={18} />
        </button>
       
      </div>
      <button className="btnVariantOne">ACCEPT ALL COOKIES</button>
      <div className='containerBtn'>
      <div className="chat-popup">
        <span>Hey there 👋 Want to know something cool?</span>
        <button className="chat-close" onClick={() => setIsVisible(false)}>
          <AiOutlineClose size={12} />
        </button>
        
      </div>
      <div className='purpleBtn'>
        👋 
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Homepage
