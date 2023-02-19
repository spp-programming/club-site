import "./UsefulLinks.css";
import LinkCard from "../../components/LinkCard/LinkCard";
import codeSandBoxImage from "../../assets/codesandbox-image.jpg";
import theCodingTrainImage from "../../assets/coding-train-image.jpeg";
import fireshipImage from "../../assets/fireshipio-image.jpg";
import devdocsImage from "../../assets/devdocs-image.png";
import codewarsImage from "../../assets/codewars-image.jpg";
import roadmapShImage from "../../assets/roadmapsh-image.png";
import dribbbleImage from "../../assets/dribbble-image.jpg";

const UsefulLinks = ({ props }) => {
    return (
        <div className="page-container">
            <h1>Useful Links</h1>
            <div id="links-container">
                <LinkCard
                    link="https://codesandbox.io/"
                    title="CodeSandBox"
                    desc="A browser solution for developing web apps with your chromebook."
                    image={codeSandBoxImage}
                />
                <LinkCard
                    link="https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw"
                    title="The Coding Train"
                    desc="A YouTube channel that teaches its viewers JavaScript through the P5.js library."
                    image={theCodingTrainImage}
                />
                <LinkCard
                    link="https://www.youtube.com/@Fireship"
                    title="Fireship.io"
                    desc="A fast-paced coding YouTube channel, Fireship is great for a quick overview of web dev tools."
                    image={fireshipImage}
                />
                <LinkCard
                    link="https://devdocs.io/"
                    title="DevDocs"
                    desc="An aggregator of documentation, DevDocs is searchable, and downloadable for offline usage."
                    image={devdocsImage}
                />
                <LinkCard
                    link="https://codewars.io/"
                    title="CodeWars"
                    desc="Interactive, 'gameified' coding challenges to learn JavaScript. This is quite helpful for becoming comfortable with array methods."
                    image={codewarsImage}
                />
                <LinkCard
                    link="https://roadmap.sh/"
                    title="Roadmap.sh"
                    desc="Contains developer roadmaps, recommending technologies you should learn to enter the field of your choice in software."
                    image={roadmapShImage}
                />
                <LinkCard
                    link="https://dribbble.com/"
                    title="Dribbble"
                    desc="A global community for designers, this is a great resource to inspire app designs and get your creative juices flowing."
                    image={dribbbleImage}
                />
            </div>
        </div>
    );
};

export default UsefulLinks;
