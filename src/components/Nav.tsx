import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <nav className="text-center">
                <ul className="max-w-screen-lg flex justify-between m-auto text-3xl">
                    <li className={"border px-2 rounded-lg bg-blue-600 text-white"}><Link to='/'>Home</Link></li>
                    <li className={"border px-2 rounded-lg bg-blue-600 text-white"}><Link to='/about'>About</Link></li>
                    <li className={"border px-2 rounded-lg bg-blue-600 text-white"}><Link to='/contact'>Contact</Link></li>
                    <li className={"border px-2 rounded-lg bg-blue-600 text-white"}><Link to='/homepage'>Home Page</Link></li>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;
