import "./LinkCard.css";
import linkIcon from "../../assets/link-icon.png";
const LinkCard = ({ link, image, title, desc }) => {
    const imageStyling = {
        backgroundImage: `linear-gradient( rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6) ),url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <a className="link-card-href" href={link}>
            <div style={imageStyling} className="card-container">
                <img src={linkIcon} alt="Link icon" id="link-card-image" />
                <h2>{title ? title : "Title"}</h2>
                <p>{desc ? desc : "Lorem ipsum dolor sit amet"}</p>
            </div>
        </a>
    );
};

export default LinkCard;
