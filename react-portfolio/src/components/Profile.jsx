import React from 'react'

const Profile = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/assets/Salsabeel-Ibrahim-Resume.pdf' // Make sure the file is inside the 'public' folder
    link.download = 'Salsabeel_Ibrahim_CV.pdf' // Change the filename as needed
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div>
      <section id="profile">
        <div className="section__pic-container">
          <img src="./assets/profile-pic1.png" alt="John Doe profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Salsabeel Ibrahim</h1>
          <p className="section__text__p2">Software Engineer</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={handleDownload}>
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = './#contact')}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="./assets/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={() =>
                window.open(
                  'https://linkedin.com/in/salsabeel-ibrahim',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            />
            <img
              src="./assets/github.png"
              alt="My Github profile"
              className="icon"
              onClick={() =>
                window.open(
                  'https://github.com/salsabeel10',
                  '_blank'
                )
              }
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
