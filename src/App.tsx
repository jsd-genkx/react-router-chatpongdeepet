import Nav from "./components/Nav.tsx";
import HomePage from "./components/HomePage.tsx";
import Home from "./components/Home.tsx";
import Contact from "./components/Contact.tsx";
import { Routes, Route } from "react-router-dom";
import About from "./components/About.tsx";

const App = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="homepage" element={<HomePage />} />
            </Routes>
        </div>
    );
};

export default App;
