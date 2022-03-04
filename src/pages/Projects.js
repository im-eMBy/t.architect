import { Link } from "react-router-dom";
import { ImageLoader } from "../components/ImageLoader";

export const Projects = ({ data, isInteriors = false }) => {

    const getProjects = () => {
        return data.map((project, index) => {
            return <div className="projects__thumbnail" key={project.id}>
                <Link to={`/project/${project.id}`}>
                    <ImageLoader imgSrc={project.coverPhoto.url} imgAlt="Project thumbnail" />
                    <div className="projects__thumbnail-hover-element">
                        <span>{index < 9 ? `0${index + 1}.` : `${index + 1}.`}</span>
                    </div>
                </Link>
            </div>
        })
    }

    return <div className="main__container-inner projects__container">
        <div className="default-paragraph projects__paragraph">
            <h1>{isInteriors ? "Interiors" : "Projects"}</h1>
            {isInteriors ?
                <p>My commercial interiors designs.<br /> Click the little image to find out more about it.</p> :
                <p>My commercial projects.<br/> Click the little image to find out more about it.</p>
            }
        </div>
        <div className="projects__list">
            {getProjects()}
        </div>
    </div>
}