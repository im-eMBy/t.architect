import { useHistory } from "react-router-dom";

import "../scss/_back-button.scss";

export const BackButton = () => {
    const history = useHistory();
    return <button className="back-button" onClick={() => history.goBack()}>
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="337.073px" height="337.073px" viewBox="0 0 337.073 337.073">
            <path d="M168.537,0.006C75.606,0.006,0,75.612,0,168.537c0,92.93,75.606,168.53,168.537,168.53
		    c92.924,0,168.537-75.601,168.537-168.53C337.073,75.612,261.473,0.006,168.537,0.006z M224.327,253.961
		    c4.816,4.815,4.816,12.622,0,17.438c-2.408,2.402-5.561,3.615-8.719,3.615c-3.164,0-6.305-1.213-8.719-3.615l-94.144-94.131
		    c-4.816-4.828-4.816-12.637,0-17.453l94.144-94.134c4.815-4.819,12.622-4.819,17.438,0c4.816,4.815,4.816,12.619,0,17.426
		    l-85.424,85.431L224.327,253.961z"/>
        </svg>
        <span>BACK</span>
    </button>
}