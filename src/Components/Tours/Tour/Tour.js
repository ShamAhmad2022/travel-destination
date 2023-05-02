import { NavLink, Link } from "react-router-dom";
import './tour.css';

function Tour(props) {

    const {data} = props;

    return (
        <>
        {
            data.map(element => 
            <NavLink className={"tour-link"} to={`/city/${element.id}`}>
                <div key={element.id} className="tour-card">
                    <p>{element.name}</p>
                    <img src={element.image} alt={element.name} className="tour-card-img"/>
                </div>
            </NavLink>
            )
        }
        </>
    );
}

export default Tour;