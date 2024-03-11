import Header from '../Header'
import './index.css'

const About = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          className="about-image-desktop"
          alt="about"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          className="about-image-mobile"
          alt="about"
        />
      </div>
    </>
  )
}

export default About
