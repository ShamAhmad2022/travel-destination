import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import data from "./data/data.json";
import TourDetails from "./Components/TourDetails/TourDetails";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home data={data}/>}/>
          <Route exact path="/city/:id" element={<TourDetails data={data}/>}/>
        </Routes>  
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
