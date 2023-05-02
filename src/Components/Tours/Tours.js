import './tours.css';
import Tour from './Tour/Tour';

function Tours(props) {

    let {data} = props;

    return (
        <section className="tours">

        <Tour data={data}></Tour>

        </section>

    );

}

export default Tours;