import { useCallback, useState } from "react";
import { Loading } from "./Loading"

export const ImageLoader = ({imgSrc, imgAlt, noLoader = false}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoaded = useCallback(() => {
        setIsLoaded(true);
    }, [])

    return <div className="image__container">
        {isLoaded || noLoader ? null : <Loading />}
        <img src={imgSrc} alt={imgAlt} onLoad={handleLoaded} style={isLoaded ? {visibility:"visible"} : {visibility: "hidden"}} />
    </div>
}