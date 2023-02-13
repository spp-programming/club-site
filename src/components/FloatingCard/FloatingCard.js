const FloatingCard = ({ title, desc, color, icon }) => {
    return (
        <div color={color} className="card-container">
            <img src={icon} alt="Card icon" />
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    );
};

export default FloatingCard;
