import "./App.css";
import Routing from "./Routing";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Footer from "./Footer/Footer";

function App() {
  console.log("APP");
  return (
    <>
      <Navbar />
      <Routing />
      <Filter />
      <Footer />
    </>
  );
}

export default App;
