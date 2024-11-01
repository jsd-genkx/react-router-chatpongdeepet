import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./components/ProductDetails";

const products = [
    { id: 1, name: "Wireless Bluetooth Headphones", price: 79.99, description: "Noise-canceling over-ear headphones with high-quality sound and comfortable fit.", category: "Electronics" },
    { id: 2, name: "Stainless Steel Water Bottle", price: 19.99, description: "Eco-friendly, reusable water bottle with double-wall insulation to keep drinks cold or hot.", category: "Home & Kitchen" },
    { id: 3, name: "Yoga Mat with Carrying Strap", price: 29.99, description: "Non-slip, durable yoga mat with extra thickness for comfort and support.", category: "Sports & Outdoors" },
    { id: 4, name: "Ceramic Coffee Mug", price: 12.99, description: "Stylish ceramic mug with ergonomic handle, perfect for hot beverages.", category: "Home & Kitchen" },
    { id: 5, name: "Wireless Mouse", price: 15.99, description: "Compact, ergonomic wireless mouse with adjustable DPI settings and USB receiver.", category: "Electronics" }
];

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
                    <Route path="products" element={<Products products={products} />} />
                    <Route path="products/:id" element={<ProductDetails products={products} />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
