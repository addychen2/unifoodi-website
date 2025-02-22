import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar--container'>
            <div className="navbar--content">
                <div className="navbar--logo">
                    <img draggable="false" src="UNiFOODi Logo (No Background).png" alt="UNiFOODi Logo" />
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