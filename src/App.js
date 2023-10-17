import "./App.css";
import Routing from "./Routing";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/authContext";
import ProductsContextProvider from "./context/productContext";

function App() {
  console.log("APP");
  return (
    <>
      <ProductsContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Routing />
        </AuthContextProvider>
      </ProductsContextProvider>
    </>
  );
}

export default App;
