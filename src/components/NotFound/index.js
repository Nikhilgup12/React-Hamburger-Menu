import Header from '../Header'
import './index.css'

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          className="notfound-image"
          alt="not found"
        />
        <h1 className="notfound-heading"> Lost Your Way? </h1>
        <p className="notfound-para">
          we cannot seem before again page not found
        </p>
      </div>
    </>
  )
}
export default NotFound
