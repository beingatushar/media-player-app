import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FeaturesPage from "./pages/FeaturesPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className="min-h-screen bg-gray-800">
            <Header />
            <div className="container mx-auto p-4 ">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/features" element={<FeaturesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
