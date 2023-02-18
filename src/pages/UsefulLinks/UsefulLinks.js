import "./UsefulLinks.css";
import LinkCard from "../../components/LinkCard/LinkCard";

const UsefulLinks = ({ props }) => {
    return (
        <div className="container">
            <h1>Useful Links</h1>
            <div id="links-container">
                <LinkCard link="" />
                <LinkCard link="" />
                <LinkCard link="" />
                <LinkCard link="" />
                <LinkCard link="" />
            </div>
        </div>
    );
};

export default UsefulLinks;
