import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// Pages
import Home from "./pages/Home/Home";
import UsefulLinks from "./pages/UsefulLinks/UsefulLinks";
import FeaturedProjects from "./pages/FeaturedProjects/FeaturedProjects";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/useful-links" element={<UsefulLinks />}></Route>
                <Route
                    path="/featured-projects"
                    element={<FeaturedProjects />}
                ></Route>
            </Routes>
        </>
    );
}

export default App;
