import Alps from '../images/AlpsBubble.png';
import { navbarItems } from '../data'

const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="logo">
        <img src={Alps} alt="Mountain Logo" />
      </div>
      <ul>
        {navbarItems.map(item => {
          const { id, title, href } = item
          return (
            <li className='nav-items' key={id}>
              <a href={href}>{title}</a>
            </li>
          );
        })};
      </ul>
    </nav>
  )
}

export default Navbar