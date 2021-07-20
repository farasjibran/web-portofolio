import React from 'react'

const githubLink = (e) => {
  e.preventDefault()
  window.location = 'https://github.com/farasjibran'
}
const ScreenApp = () => {
  return (
    <div className="perspective effect-rotate-left">
      <div className="container">
        <div className="outer-nav--return" />
        <div id="viewport" className="l-viewport">
          <div className="l-wrapper">
            <header className="header">
              <a className="header--logo" href="#0">
                <img src="logo.png" alt="Global" className="logoheader" />
                <p>Muhammad Farras Jibran</p>
              </a>
              <button className="header--cta" onClick={githubLink}>
                About Me
              </button>
              <div className="header--nav-toggle">
                <span />
              </div>
            </header>
            <nav className="l-side-nav">
              <ul className="side-nav">
                <li className="is-active">
                  <span>Home</span>
                </li>
                <li>
                  <span>Works</span>
                </li>
                <li>
                  <span>Contact</span>
                </li>
                <li>
                  <span>Hire Me</span>
                </li>
              </ul>
            </nav>
            <ul className="l-main-content main-content">
              <li className="l-section section section--is-active">
                <div className="intro">
                  <div className="intro--banner">
                    <h1>
                      <br />
                      <br />
                      Web Developer
                    </h1>
                    <button onClick={githubLink}>
                      About Me
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 150 118"
                        style={{ enableBackground: 'new 0 0 150 118' }}
                        xmlSpace="preserve"
                      >
                        <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                          <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                        </g>
                      </svg>
                      <span className="btn-background" />
                    </button>
                    <img
                      src="profile.png"
                      alt="Welcome"
                      className="profileimg"
                    />
                  </div>
                  <div className="intro--options">
                    <a href="#0">
                      <h3>Front-end Developer & Back-end Developer</h3>
                      <p>
                        2 years of experience in the web field. I learned it
                        while sitting in high school.
                      </p>
                    </a>
                    <a href="#0">
                      <h3>Web Designer</h3>
                      <p>
                        Besides working in front-end & back-end, I also have
                        experience in web designer.
                      </p>
                    </a>
                    <a href="#0">
                      <h3>Framework & Languages</h3>
                      <p>
                        The languages ​​& frameworks that I control include
                        laravel from php, react js & react native from
                        javascript etc.
                      </p>
                    </a>
                  </div>
                </div>
              </li>
              <li className="l-section section">
                <div className="work">
                  <h2>Completed Work</h2>
                  <div className="work--lockup">
                    <ul className="slider">
                      <li className="slider--item slider--item-left">
                        <a href="https://github.com/farasjibran/COLLAGER">
                          <div className="slider--item-image">
                            <img src="assets/img/image1.jpg" alt="Collager" />
                          </div>
                          <p className="slider--item-title">Collager</p>
                          <p className="slider--item-description">
                            An website to find campuses according to students'
                            interests and talents.
                          </p>
                        </a>
                      </li>
                      <li className="slider--item slider--item-center">
                        <a href="https://github.com/EH-Corporation-Magang/company-xnetwork">
                          <div className="slider--item-image">
                            <img
                              src="assets/img/image2.jpg"
                              alt="Company Profile"
                            />
                          </div>
                          <p className="slider--item-title">Company Profile</p>
                          <p className="slider--item-description">
                            An website to describe a company.
                          </p>
                        </a>
                      </li>
                      <li className="slider--item slider--item-right">
                        <a href="https://github.com/EH-Corporation-Magang/Promo-Magang-V1">
                          <div className="slider--item-image">
                            <img src="assets/img/image3.jpg" alt="E-Commerce" />
                          </div>
                          <p className="slider--item-title">
                            E-Commerce Website
                          </p>
                          <p className="slider--item-description">
                            An website for sell and buy the item.
                          </p>
                        </a>
                      </li>
                    </ul>
                    <div className="slider--prev">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 150 118"
                        style={{ enableBackground: 'new 0 0 150 118' }}
                        xmlSpace="preserve"
                      >
                        <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                          <path
                            d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
              c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
              c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="slider--next">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 150 118"
                        style={{ enableBackground: 'new 0 0 150 118' }}
                        xmlSpace="preserve"
                      >
                        <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                          <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
              <li className="l-section section">
                <div className="contact">
                  <div className="contact--lockup">
                    <div className="modal">
                      <div className="modal--information">
                        <p>Jln. Hj Abdul Ghani II, Perum Griya Kalibaru</p>
                        <a href="mailto:farasjibran@gmail.com">
                          farasjibran@gmail.com
                        </a>
                        <a href="tel:+6281213517643">+62 812 1351 7643</a>
                      </div>
                      <ul className="modal--options">
                        <li>
                          <a href="https://github.com/farasjibran">Github</a>
                        </li>
                        <li>
                          <a href="https://dribbble.com/FarasJibran">
                            Dribbble
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/muhammad-farras-jibran-58bab91b6/">
                            Linked In
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="l-section section">
                <div className="hire">
                  <h2>Keep In Touch With Me</h2>
                  <br />
                  <br />
                  <form className="work-request">
                    <div className="work-request--information">
                      <div className="information-name">
                        <input id="name" type="text" spellCheck="false" />
                        <label htmlFor="name">Name</label>
                      </div>
                      <div className="information-email">
                        <input id="email" type="email" spellCheck="false" />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <input type="submit" defaultValue="Send Request" />
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="outer-nav">
        <li className="is-active">Home</li>
        <li>Works</li>
        <li>Contact</li>
        <li>Hire us</li>
      </ul>
    </div>
  )
}

export default ScreenApp
