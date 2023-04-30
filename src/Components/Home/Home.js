import Header from "../Header/Header";
import Tours from "../Tours/Tours";
import Footer from "../Footer/Footer";

function Home(props) {

    let {data} = props;

    return (
        <>
        <Header />
        <Tours data={data}/>
        <Footer />
        </>
    );
}

export default Home;