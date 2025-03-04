import './Nav.css';
import logo from '../../Company_Logos/UNiFOODi Logo (No Background).png';

const Navbar = () => {
    return (
        <nav className='navbar--container'>
            <div className="navbar--content">
                <div className="navbar--logo">
                    <img draggable="false" src={logo} alt="UNiFOODi Logo" />
                </div>
                <div className="navbar--links">
                    <ul>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;