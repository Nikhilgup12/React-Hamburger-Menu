import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const Header = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-content">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
              className="nav-logo"
              alt="website logo"
            />
          </Link>
          <Popup
            modal
            trigger={
              <button
                className="nav-theme-btn"
                data-testid="theme"
                type="button"
                data-testid="hamburgerIconButton"
              >
                <GiHamburgerMenu aria-label="close" />
              </button>
            }
          >
            {close => (
              <>
                <div className="hamburger-container">
                  <button
                    className="cross-icon"
                    onClick={() => close()}
                    data-testid="closeButton"
                  >
                    <IoMdClose aria-label="close"/>
                  </button>

                  <div className="menu-container">
                    <Link to="/" className="home-link" onClick={() => close()}>
                      <div className="home-icon-container">
                        <AiFillHome size={30} />
                        <h1 className="home"> Home </h1>
                      </div>
                    </Link>
                    <Link
                      to="about"
                      className="about-link"
                      onClick={() => close()}
                    >
                      <div className="about-icon-container">
                        <BsInfoCircleFill size={30} />
                        <h1 className="about"> About </h1>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </Popup>
        </div>
      </nav>
    </>
  )
}

export default Header
