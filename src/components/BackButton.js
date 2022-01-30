import { useHistory } from "react-router-dom";

export const BackButton = () => {
    const history = useHistory();
    return <button className="back-button" onClick={history.goBack}><i className="fas fa-chevron-circle-left" />&nbsp;BACK</button>
}