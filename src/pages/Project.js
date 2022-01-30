import { useState, useCallback, useRef } from "react";
import { useParams } from "react-router";
import ReactMarkdown from 'react-markdown';
import { BackButton } from "../components/BackButton";
import { Loading } from "../components/Loading";


export const Project = ({ getData }) => {
    const { id } = useParams();
    const projectData = getData(id);

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

    const [currentPhoto, setCurrentPhoto] = useState(projectData.photos[0]);

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
    const handleNextPhoto = () => {
        setCurrentPhoto(prevPhoto => {
            let currentIndex = projectData.photos.findIndex((element) => {
                return element.id === prevPhoto.id
            });
            currentIndex++;
            if (currentIndex >= projectData.photos.length) { currentIndex = 0 };
            return projectData.photos[currentIndex]
        })
    }
    const handlePreviousPhoto = () => {
        setCurrentPhoto(prevPhoto => {
            let currentIndex = projectData.photos.findIndex((element) => {
                return element.id === prevPhoto.id
            });
            currentIndex--;
            if (currentIndex < 0) { currentIndex = projectData.photos.length - 1 };
            return projectData.photos[currentIndex]
        })
    }

    return <div className="main__container-inner project__container">
        <div className="default-paragraph project__paragraph">
            <BackButton />
            <h1>{projectData.shortTitle}</h1>
            <p className="project__description"><ReactMarkdown>{projectData.text}</ReactMarkdown></p>
        </div>
        <div className="project__gallery">
            <div className="project__current-photo">
                <button onClick={handlePreviousPhoto}><i className="fas fa-angle-double-left" /></button>
                <div className="project__current-photo-container">
                    <img src={currentPhoto.url} alt="Project gallery preview" />
                </div>
                <button onClick={handleNextPhoto}><i className="fas fa-angle-double-right" /></button>
            </div>
            <div className="project__photos-list">
                {getThumbnails()}
            </div>
        </div>
    </div>

}