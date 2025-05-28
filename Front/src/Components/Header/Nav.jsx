import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
          </Link>

      </li>   

      <li>
        <Link to="/About" onClick={() => setMobileToggle(false)}>About Us</Link>
        
      </li>      
    
      <li>
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          News
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
