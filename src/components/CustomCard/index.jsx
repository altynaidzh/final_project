import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../context/productContext";
import "./cardStyles.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

const CustomCard = (props) => {
  console.log(props);

  const navigate = useNavigate();

  // Assuming you have an onDelete function and a product prop
  const { onDelete, product } = useContext(productsContext);

  return (
    <div className="card-box">
      <img className="card-img" src={props.image} /> {/* Fixed src attribute */}
      <div className="card-info-flex">
        <h3
          className="card-title"
          style={{ margin: 0, marginTop: 10, padding: 0 }}
        >
          {props.title}
        </h3>
        <div
          className="card-rating"
          style={{ margin: 0, marginTop: 10, padding: 0 }}
        >
          <StarRateRoundedIcon />
          <p style={{ margin: 0, padding: 0 }}>{props.rating}</p>
        </div>
      </div>
      <p style={{ margin: 0, color: "#717171" }}>{props.location}</p>
      <p style={{ margin: 0, color: "#717171" }}>{props.description}</p>
      <p style={{ margin: 0, color: "#717171" }}>{props.education}</p>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "black" }}>
        <span style={{ fontWeight: "600", marginTop: "10px" }}>
          {props.price}
        </span>
      </p>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "black" }}>
        <span style={{ fontWeight: "600", marginTop: "10px" }}>
          {props.price_dollar}
        </span>
      </p>
      <div className="hover-buttons">
        <button className="card-button" onClick={() => navigate("/edit-ad")}>
          Edit
        </button>
        <button className="card-button" onClick={() => onDelete(product.id)}>
          Delete
        </button>
        <button className="card-button">Comment</button>
        <button className="card-button">Details</button>
        <button className="card-button">Evaluate</button>
      </div>
    </div>
  );
};

export default CustomCard;
