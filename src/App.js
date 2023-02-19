import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// Pages
import Home from "./pages/Home/Home";
import UsefulLinks from "./pages/UsefulLinks/UsefulLinks";
import FeaturedProjects from "./pages/FeaturedProjects/FeaturedProjects";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/club-site" element={<Home />}></Route>
                <Route path="/useful-links" element={<UsefulLinks />}></Route>
                <Route
                    path="/featured-projects"
                    element={<FeaturedProjects />}
                ></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
