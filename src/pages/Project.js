import { useState, useCallback, useRef } from "react";
import { useParams } from "react-router";
import ReactMarkdown from 'react-markdown';
import { BackButton } from "../components/BackButton";
import { Loading } from "../components/Loading";

export const Project = ({ data }) => {
    const { id } = useParams();
    const projectData = data(id);

    const [currentPhoto, setCurrentPhoto] = useState(projectData.photos[0]);
    // const [isMediaLoaded, setIsMediaLoaded] = useState(false);
    // const mediaToLoad = projectData.photos.length;
    // const mediaLoaded = useRef(0);
    // const loadingCallback = useCallback(() => {
    //     ++mediaLoaded.current;
    //     console.log(mediaLoaded.current);
    //     if(mediaLoaded.current === mediaToLoad) {
    //         setIsMediaLoaded(true);
    //     }
    // }, [mediaLoaded, mediaToLoad])
    
    const handleNextPhoto = () => {
        const currentIndex = projectData.photos.findIndex(photo => photo.id === currentPhoto.id);
        if (currentIndex >= projectData.photos.length - 1) {
            setCurrentPhoto(projectData.photos[0]);
            return
        }
        setCurrentPhoto(projectData.photos[currentIndex + 1]);
    }
    const handlePreviousPhoto = () => {
        const currentIndex = projectData.photos.findIndex(photo => photo.id === currentPhoto.id);
        if (currentIndex === 0) {
            setCurrentPhoto(projectData.photos[projectData.photos.length - 1]);
            return
        }
        setCurrentPhoto(projectData.photos[currentIndex - 1]);
    }

    const getThumbnails = () => {
        return projectData.photos.map((photo, index) => {
            return <div className="project__photo-thumbnail-container" key={photo.id} onClick={() => setCurrentPhoto(photo)}>
                <img src={photo.url} alt="Project gallery thumbnail" />
                <div className="project__thumbnail-hover-element">
                    <span>{index < 9 ? `0${index + 1}.` : `${index + 1}.`}</span>
                </div>
            </div>
        })
    }

    return <div className="main__container-inner project__container">
        <div className="default-paragraph project__paragraph">
            <BackButton />
            <h1>{projectData.shortTitle}</h1>
            <div className="project__description">
                <ReactMarkdown>{projectData.text}</ReactMarkdown>
            </div>
        </div>
        <div className="project__gallery">
            <div className="project__current-photo">
                <button onClick={handlePreviousPhoto}>
                    <svg width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.63 47.94L0 23.97L16.63 0L26.65 6.51L14.77 23.97L26.75 41.43L16.63 47.94ZM39.98 47.94L23.35 23.97L39.98 0L50 6.51L38.12 23.97L50 41.43L39.98 47.94Z" fill="black" />
                    </svg>
                </button>
                <div className="project__current-photo-container">
                    <img src={currentPhoto.url} alt="Project gallery preview" />
                </div>
                <button onClick={handleNextPhoto}>
                    <svg width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.3698 0.0600014L49.9998 24.03L33.3698 48L23.3498 41.49L35.2298 24.03L23.2498 6.57L33.3698 0.0600014ZM10.0198 0.0600014L26.6498 24.03L10.0198 48L-0.000244141 41.49L11.8798 24.03L-0.000244141 6.57L10.0198 0.0600014Z" fill="black" />
                    </svg>
                </button>
            </div>
            <div className="project__photos-list">
                {getThumbnails()}
            </div>
        </div>
    </div>

}