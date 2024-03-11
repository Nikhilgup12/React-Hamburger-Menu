import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          className="home-image-desktop"
          alt="home"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          className="home-image-mobile"
          alt="home"
        />
      </div>
    </>
  )
}

export default Home
