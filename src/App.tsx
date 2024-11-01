import Nav from "./components/Nav.tsx";
import HomePage from "./pages/HomePage.tsx";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";

const App = () => {
    return (
        <div>
            <Nav />
            <div className="text-center mt-5">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="homepage" element={<HomePage />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
