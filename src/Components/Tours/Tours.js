import './tours.css';

function Tours(props) {

    let {data} = props;

    return (
        <section className="tours">
        {
            data.map(element => 
            <div key={element.id}>
                <p>{element.name}</p>
                <img src={element.image} alt={element.name}/>
                <hr></hr>
            </div>
            )
        }

        </section>

    );

}

export default Tours;