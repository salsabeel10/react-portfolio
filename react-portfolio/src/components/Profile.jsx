import React from 'react'

const Profile = () => {
  return (
    <div>
      <section id="profile">
        <div class="section__pic-container">
          <img src="./assets/profile-pic1.png" alt="John Doe profile picture" />
        </div>
        <div class="section__text">
          <p class="section__text__p1">Hello, I'm</p>
          <h1 class="title">Salsabeel Ibrahim</h1>
          <p class="section__text__p2">Software Engineer</p>
          <div class="btn-container">
            <button
              class="btn btn-color-2"
              onclick="window.open('./assets/Salsabeel-Ibrahim-cv.pdf')"
            >
              Download CV
            </button>
            <button
              class="btn btn-color-1"
              onclick="location.href='./#contact'"
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="./assets/linkedin.png"
              alt="My LinkedIn profile"
              class="icon"
              onclick="location.href='https://linkedin.com/in/salsabeel-ibrahim'"
            />
            <img
              src="./assets/github.png"
              alt="My Github profile"
              class="icon"
              onclick="location.href='https://github.com/salsabeel10'"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile