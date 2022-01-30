import { Link } from "react-router-dom";

export const Projects = ({ projectsData, isInteriors = false }) => {

    const getProjects = () => {
        return projectsData.map((project, index) => {
            return <div className="projects__thumbnail" key={project.id}>
                <Link to={`/project/${project.id}`}>
                    <img src={project.coverPhoto.url} alt="Project thumbnail" />
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