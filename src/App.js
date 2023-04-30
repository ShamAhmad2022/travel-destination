import Home from "./Components/Home/Home";
import data from "./data/data.json";

function App() {
  return (
    <>
    <Home data={data}/>
    </>
  );
}

export default App;
