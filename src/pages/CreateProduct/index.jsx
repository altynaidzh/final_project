import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { productsContext } from "../../context/productContext";

const CreateProduct = () => {
  const { getCategories, categories, createProduct } =
    useContext(productsContext);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [education, setEducation] = useState("");
  const [price, setPrice] = useState("");
  //   const [selectedCategory, setSelectedCategory] = useState("");

  //   useEffect(() => {
  //     getCategories();
  //   }, []);

  const handleSubmit = async () => {
    const product = {
      image,
      title,
      description,
      education,
      price,

      //   category: selectedCategory,
    };

    for (const key in product) {
      if (!product[key].trim()) {
        return alert("Fill out all fields");
      }
    }

    await createProduct(product);
    alert("Your ad is now in Airbnb");
    setImage("");
    setTitle("");
    setPrice("");
    setDescription("");
    // setSelectedCategory("");
  };
  console.log();

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        margin: "0 auto",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <TextField
        fullWidth
        label="Insert link to the image"
        className="createInput"
        style={{ marginBottom: "10px" }}
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <TextField
        fullWidth
        label="Title"
        className="createInput"
        style={{ marginBottom: "10px" }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        fullWidth
        label="Short description"
        className="createInput"
        style={{ marginBottom: "10px" }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        fullWidth
        label="Available dates"
        className="createInput"
        style={{ marginBottom: "10px" }}
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
      <TextField
        fullWidth
        label="Price per night"
        className="createInput"
        style={{ marginBottom: "10px" }}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{ backgroundColor: "#F08080", color: "white", padding: "7px" }}
        onClick={handleSubmit}
      >
        Airbnb your home
      </Button>
    </Box>
  );
};

export default CreateProduct;
