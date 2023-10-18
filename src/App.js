import "./App.css";
import Routing from "./Routing";
import CardList from "./components/CardList/CardList";
import FilterM from "./components/FilterM";
import FooterM from "./components/FooterM/FooterM";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/authContext";
import ProductsContextProvider from "./context/productContext";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  console.log("APP");
  return (
    <>
      <ProductsContextProvider>
        <AuthContextProvider>
          <Navbar />
          <FilterM />

          <Routing />
          <FooterM />
        </AuthContextProvider>
      </ProductsContextProvider>
    </>
  );
}

export default App;
