import "./App.css";
import Routing from "./Routing";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Footer from "./Footer/Footer";
import ProductsContextProvider from "./context/productContext"

function App() {
  console.log("APP");
  return (
    <>
      <Navbar />
      <Routing />
      <Filter />
      <Footer />
      <ProductsContextProvider>
        <Navbar />
        <Routing />
      </ProductsContextProvider>
    </>
  );
}

export default App;
