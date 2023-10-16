import React, { useContext, useEffect } from "react";
import CustomCard from "../../components/CustomCard";
import "./home.css";
import { productsContext } from "../../context/productContext";

const HomePage = () => {
  const { products, getProducts, getCategories, categories } =
    useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="cardDiv">
        {products.map((item) => (
          <CustomCard {...item} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
