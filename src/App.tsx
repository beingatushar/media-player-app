import Header from "./components/Header";
import Features from "./components/Features";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Player from "./components/Player";
import { DiVim } from "react-icons/di";

function App() {
    return (
        <div className="grid grid-cols-3 min-h-screen bg-gray-900 ">
            {/* Header */}
            <Header />

            {/* Routes */}
            <div className="col-span-3">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {/* <div className="grid-col-3"></div> */}
                                <div className="container max-w-4xl mx-auto">
                                    <Player />
                                </div>
                                {/* <div className="grid-col-3"></div> */}
                            </>
                        }
                    />
                    <Route path="/features" element={<Features />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
