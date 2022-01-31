import { Link } from "react-router-dom"

export const Awards = ({ awardsData }) => {

    const getAwards = () => {
        return awardsData.map((award, i) => {
            return <span key={i}><Link to={`/project/${award.project}`}>{award.text}</Link></span>
        })
    }

    return <div className="main__container-inner awards__container">
        <div className="default-paragraph awards__paragraph">
            <h1>Awards</h1>
            <p>I took part in many competitions.<br />
                These are some honors and awards I won.<br />
                Click on the links to read more.
            </p>
        </div>
        <div className="awards__list">
            {getAwards()}
        </div>
    </div>
}