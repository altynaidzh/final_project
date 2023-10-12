import "./App.css";
import Routing from "./Routing";
import Navbar from "./components/Navbar";
import ProductsContextProvider from "./context/productContext";

function App() {
  console.log("APP");
  return (
    <>
      <ProductsContextProvider>
        <Navbar />
        <Routing />
      </ProductsContextProvider>
    </>
  );
}

export default App;
