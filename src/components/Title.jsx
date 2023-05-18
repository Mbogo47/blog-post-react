import {Link} from 'react-router-dom'
import {FaHome, FaBook} from 'react-icons/fa'


function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <Link to='/' className="link"><FaHome />Home</Link>
                <h1>Ivy's Blog</h1>
                <Link to='/blogs' className="link"><FaBook />Blogs</Link>
            </nav>
            
        </header>
    );
}

export default Header;

