import "./LinkCard.css";
import linkIcon from "../../assets/link-icon.png";
const LinkCard = ({ link, image, title, desc }) => {
    return (
        <div className="card-container">
            <img
                src={image ? image : linkIcon}
                alt="Link icon"
                id="link-card-image"
            />
            <h2>{title ? title : "Title"}</h2>
            <p>{desc ? desc : "Lorem ipsum dolor sit amet"}</p>
        </div>
    );
};

export default LinkCard;
