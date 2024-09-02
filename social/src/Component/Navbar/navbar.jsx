
import './navbar.css';
import logo from "../../assets/image/logo.png";

const navbar = () => {
  return (
    <>
    <nav>
      <img src={logo} alt='' className='logo-image'/>
      <ul>
        <li><a href='#'>Features</a></li>
        <li><a href='#'>How it works</a></li>
        <li><a href='#'>Privacy</a></li>
      </ul>
      <div>
            <a href='#' className='login-btn'>Log in</a>
            <a href='#' className='btn'>Download App</a>
      </div>
    </nav>
    </>
  )
}

export default navbar
