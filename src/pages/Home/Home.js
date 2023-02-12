import "./Home.css";
const Home = ({ props }) => {
    return (
        <>
            <header>
                <h1 id="header-title">Programming Club</h1>
                <p>The official programming club of Saint Peter's Prep</p>
                <a href="https://discord.gg/SGh2tG5RYB">
                    <button className="floating-btn">Join Us</button>
                </a>
            </header>
        </>
    );
};

export default Home;
