import React from 'react'

const About = () => {
  return (
    <div>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="./assets/about1.png"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="./assets/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Web Development
                </p>
              </div>
              <div className="details-container">
                <img
                  src="./assets/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>B.Tech Computer Science</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Hello! I’m Salsabeel Ibrahim, a Software Engineer with a passion
                for web development. I bring a blend of creativity and technical
                expertise to my work, having completed contract-based roles as a
                Frontend Developer and currently freelancing to help clients
                build engaging, user-focused web applications. I’m dedicated to
                crafting efficient and dynamic solutions that bring ideas to
                life online.
              </p>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = './#experience')}
        />
      </section>
    </div>
  )
}

export default About