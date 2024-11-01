import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                </ul>
                <ul>
                    <li><Link to='/about'>About</Link></li>
                </ul>
                <ul>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <ul>
                    <li><Link to='/homepage'>Home Page</Link></li>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;
