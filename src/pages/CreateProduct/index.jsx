import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { productsContext } from "../../context/productContext";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CreateProduct = () => {
  const { getCategories, categories, createProduct } =
    useContext(productsContext);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [education, setEducation] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [priceusd, setPriceUsd] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  const handleSubmit = async () => {
    const product = {
      title,
      image,
      description,
      education,
      price,
      priceusd,
      location,
      category: selectedCategory,
    };

    for (const key in product) {
      if (!product[key].trim()) {
        return alert("Fill out all fields");
      }
    }

    // await createProductImage(imageObj);
    await createProduct(product);
    alert("Your ad is now in Airbnb");
    setImage("");
    setTitle("");
    setPrice("");
    setDescription("");
    setEducation("");
    setSelectedCategory("");
    setPriceUsd("");
    setLocation("");
  };
  console.log(categories);

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
        label="Location"
        className="createInput"
        style={{ marginBottom: "10px" }}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
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
      <TextField
        fullWidth
        label="Price per night in USD"
        className="createInput"
        style={{ marginBottom: "10px" }}
        value={priceusd}
        onChange={(e) => setPriceUsd(e.target.value)}
      />
      <FormControl sx={{ m: 0, width: 500, marginBottom: 3 }}>
        <InputLabel id="demo-multiple-name-label">Choose category</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          input={<OutlinedInput label="Category" />}
          MenuProps={MenuProps}
        >
          {categories.map((item) => (
            <MenuItem value={item.name} key={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
