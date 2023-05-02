import { useState } from 'react';
import { useParams,NavLink} from 'react-router-dom';

import './tourDetails.css';

function TourDetails(props) {

    const {id} = useParams();
    let {data} = props;

    const selectedCityarray= data.filter((element) => element.id === id);
    const selectedCity = selectedCityarray[0];

    const [readMore, setReadMore] = useState(true);

    return (
        <div className='city-card'>

        <h2>{selectedCity.name}</h2>

        <img src={selectedCity.image} alt={selectedCity.name} className='city-card-img'/>

        <p>
        {/* here I used both the conditional operator and the conditional rendering */}
        {readMore ? selectedCity.info.slice(0, 300) : selectedCity.info}
        <span className='read-more' onClick={()=> setReadMore(!readMore)}>{readMore && " ..Read More"} {!readMore && " ..Read Less"}</span>
        </p>
        
        <p className='price'>Price: {selectedCity.price}$</p>
       
        <NavLink className={"back"} to='/'>Back</NavLink>

        </div>

    );

}

export default TourDetails;