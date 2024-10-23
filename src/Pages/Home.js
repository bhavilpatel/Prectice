import React from 'react'
import Header from '../Assets/Layout/Header';
import './Home.css'


import UiUx from '../Assets/Images/Home/UiUxDesigning.webp'
import Web from '../Assets/Images/Home/WebDevelopment.webp'
import Application from '../Assets/Images/Home/MobileAppDevelopment.webp'
import AboutImage from '../Assets/Images/Home/About.webp'
import Goal from '../Assets/Images/Home/Goal.webp'
import WhyChooseUs from '../Assets/Images/Home/WhyChooseUs.webp'
import Footer from '../Assets/Layout/Footer';


function Home() {
  const PhoneIcon = () => {
    return <svg className="h-5 w-5" style={{ height: "20px", width: "20px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
  }
  const card = [
    {
      id: 1,
      img: "https://evenscript.com/wp-content/uploads/2022/09/homeicon2.png",
      title: "Streamed Process",
      details: "In order to boost up the brand recognition we aim for the perfection in everything such as analysis, designs, development, reviewing, & understanding security concerns of the project.",
    },
    {
      id: 2,
      img: "https://evenscript.com/wp-content/uploads/2022/09/homeicon1.png",
      title: "Innovation Model",
      details: "The most effective and convenient way to attain gains in business is by devising innovative strategies.Our team of professionals focusing upon the innovations on various models.",
    },
    {
      id: 3,
      img: "https://evenscript.com/wp-content/uploads/2022/09/homeicon3.png",
      title: "Dedicated Support",
      details: "By developing & implementing the functional system & strategies for blooming the client’s business. With the team of dedicated professionals, we are geared up to bring solution.",
    },
  ]

  const wedo = [
    {
      id: 1,
      img: UiUx,
      name: "UI-UX Designing",
      href: "/services/ui_uxdesigning"
    },
    {
      id: 2,
      img: Web,
      name: "Website Development",
      href: "/services/websitedevelopment"
    },
    {
      id: 3,
      img: Application,
      name: "Mobile App Development",
      href: "/services/mobileappdevelopment"
    }

  ]
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <section className="banner">
          <div className='gif'>
            <img className="banner-gif" src="https://cdn.dribbble.com/users/205136/screenshots/2582152/ae-fun.gif" alt="" width={1000} height={500} />

            <div className="banner-text">
              <div className="banner-head">Growth With Us</div>
              <div className=""><span className='extra-text'>Provide</span> <span className='extra-text'>Business</span> <span className='extra-text'>Solutions</span></div>
              <div className="banner-dis">We are the front runners in implementing & integrating the latest technologies that perceive your brand through disciplined case studies, tools & resources.</div>
              <div className="banner-btns">
                <a href="#"><button className="banner-button">Let’s Discuss</button></a>
                <a href="#"><button className="banner-button">Explore Our Work</button></a>
              </div>
            </div>
          </div>
        </section>

        <section className="cards">
          {card.map((cards, index) => (
            <div key={index} className="card">
              <div className="card-head">{cards.title}</div>
              <div className="card-dis">{cards.details}</div>
            </div>
          ))}
        </section>

        <section className="about-section">
          <div className="section-head">About Us</div>
          <div className="about-content">
            <div className="about-image-main"><img className="about-img" src={AboutImage} alt={AboutImage} /></div>
            <div className="about-dis">
              <div className="about-headding">We Help Our Clients to Achieve Their Business Goal</div>
              <div className="about-discription">Evenscript technology is a strong team of professionals, each with expertise in their skills to deliver fast and reliable solutions. In the modern world of internet, we build strong business relationships with clients around the world, helping them leverage technology to take their business to the next level.</div>
              <div className="about-discription">Our motto is to deliver finest it business solutions to our customers. We have team of creative thinkers, professional developers and experienced managers who always ready to bring something innovative for our clients.</div>
              <div className="about-discription">Offer a perfect sky to brand for building their presence in this digital world with our visionary service.</div>
            </div>
          </div>
        </section>

        <section className="what-we-do">
          <div className="section-head">What We Do</div>
          <div className="what-we-do-content">
            <div className="what-we-do-head">What Services we Provide for Our Customers Business</div>
            <div className="what-we-do-dis">We are Web, App development & mobile app development company that can turn your ideas into the reality for your business.</div>
          </div>

          <div className="what-we-do-cards">
            {wedo.map((cards, index) => (
              <div key={index} className="what-we-do-cards-main">
                <img className="card-img" src={cards.img} alt={cards.name} width={1000} height={300} />
                <div className="card-name-main">
                  <div className="card-name">{cards.name}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="question-main">
          <div className="question">
            <div className="question-head">Request a Schedule For Free Quotes</div>
            <div><a href="#"><button className="request-btn">REQUEST A SCHEDULE</button></a></div>
          </div>
        </section>

        <section className="why-choose-us">
          <div className="section-head">Why Choose Us</div>
          <div className="why-choose-us-img"><img className="" src={WhyChooseUs} alt="" width={1000} height={300} />

            <div className="why-choose-us-content">
              <div className="why-choose-us-head">We adore our employees as well as to our clients for the more exposure.</div>
              <div className="why-choose-us-dis">Belief of Evenscript says that , Each person who is engaged with us are been proven as an asset for the company. Choosing us will encourage to render you our expertise.</div>
              <div className="why-choose-us-button">
                <div>24/7 Support Team</div>
                <div className="call-btn"><span><PhoneIcon className="phone-icon" /></span><button>+91 70169 01114</button></div>
              </div>
            </div>
          </div>
        </section>

        <section className="our-main-goal">
          <div className="section-head">Our Main Goal</div>
          <div className="our-main-goal-containt">
            <div className="our-main-goal-img"><img className="" src={Goal} alt={Goal} /></div>
            <div className="our-main-goal-dis">
              <div className="our-main-goal-head">Creating a Business with Authentic Integrity</div>
              <div className="our-main-goal-details">We partner with our clients to develop their marketing plans, and set up winning strategies to generate and convert leads. From designing, developing, and optimizing websites, to increasing sales through tactical digital marketing activities,</div>
            </div>
          </div>
          <div className="our-main-goal-dis-sec">
            <div className="our-main-goal-dis-sec-left">
              <div className="our-main-goal-dis-sec-head">Strategic vision</div>
              <div className="our-main-goal-dis-sec-details">We design for clear & unique brand communication. We will ensure a perfect support after delivering our services and products.</div>
            </div>
            <div className="our-main-goal-dis-sec-right">
              <div className="our-main-goal-dis-sec-head">Our Mission</div>
              <div className="our-main-goal-dis-sec-details">Our mission is to be partner with our clients to develop their marketing plans, and set up winning strategies to generate and convert leads.</div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
