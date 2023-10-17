import "./App.css";
import Routing from "./Routing";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import Filter from "./components/Filter";
import Footer from "./Footer/Footer";
=======
import ProductsContextProvider from "./context/productContext";
>>>>>>> 19c61c15f525e51303ac461fc09e56d7fd65e44b

function App() {
  console.log("APP");
  return (
    <>
<<<<<<< HEAD
      <Navbar />
      <Routing />
      <Filter />
      <Footer />
=======
      <ProductsContextProvider>
        <Navbar />
        <Routing />
      </ProductsContextProvider>
>>>>>>> 19c61c15f525e51303ac461fc09e56d7fd65e44b
    </>
  );
}

export default App;
