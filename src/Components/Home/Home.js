import Tours from "../Tours/Tours";

import './home.css';


function Home(props) {

    let {data} = props;

    return (
        <> 
        <h1 className="head-item">Travel Destination</h1>
        <p className="head-item-p">Here is a list of the most visited places around the world, click on the card to </p>
        <p className="head-item-p">know more details about each city</p>
        <Tours data={data}/>
        </>
    );
}

export default Home;