import "./Home.css";
const Home = ({ props }) => {
    return (
        <>
            <header>
                <h1 id="header-title">Programming Club</h1>
                <p>The official programming club of Saint Peter's Prep</p>
                <button className="floating-btn">Join Us</button>
            </header>
        </>
    );
};

export default Home;
