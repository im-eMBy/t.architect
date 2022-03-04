import { Link } from "react-router-dom";
import { ImageLoader } from "../components/ImageLoader";

export const MainPage = ({ data }) => {

    const getMainPageProjects = () => {
        return data.map((project, index) => {
            return <div className={`main-page__project main-page__project${index + 1}`} key={project.id}>
                <Link to={`/project/${project.id}`}>
                    {/* <img className="main-page__img" src={project.coverPhoto.url} alt="Main page project" /> */}
                    <ImageLoader imgSrc={project.coverPhoto.url} imgAlt="Main page project" />
                    <div className="main-page__project-hover-element"><p>{project.longTitle}</p></div>
                </Link>
            </div>
        })
    }

    return <>
        <div className="main__container-inner main-page__container">
            <div className="default-paragraph main-page__paragraph">
                <h1>Featured</h1>
                <p>These are the projects that are really worth to see. If you are willing to see other projects go to menu categories like projects, interiors or awards.</p>
            </div>
            <div className="main-page__projects-container">
                {getMainPageProjects()}
            </div>
        </div>
    </>
}