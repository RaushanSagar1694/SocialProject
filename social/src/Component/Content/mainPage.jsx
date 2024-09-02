
import './mainPage.css';
import Ig from "../../assets/image/pic.png";

const mainPage = () => {
  return (
    <div>
      <div className="content">
        <h1>Make<br />New Friends</h1>
        <p>Social is a new social media plateform to make new friends online in the woeld. Now let's explore all it's amazing features.</p>
        <a href='#' className='btn'>Join Now</a>
      </div>
      <img src={Ig} className='main-image'/>
    </div>
  )
}

export default mainPage
