import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import FreeShippingBanner from "./components/FreeDeliveryBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

import About from "./pages/About";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import TermsAndConditions from "./pages/TermsAndConditions";
import DeliveryAndReturns from "./pages/DeliveryAndReturns";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RoseGarden from "./pages/RoseGarden";



// Check if we are on the home page to conditionally render header/footer style if needed
// For now, we apply standard dark theme layout everywhere
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-background text-primary flex flex-col font-sans">
                <FreeShippingBanner />
                <Navbar />

                <main className="flex-grow pt-0">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/journal" element={<Journal />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/terms" element={<TermsAndConditions />} />
                        <Route path="/delivery-returns" element={<DeliveryAndReturns />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/rose-garden" element={<RoseGarden />} />



                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
