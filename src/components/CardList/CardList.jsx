import React from "react";

export const links = [
  {
    label: "Trending",
    imgSrc:
      "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
  },
  {
    label: "Amazing views",
    imgSrc:
      "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
  },
  {
    label: "Arctic",
    imgSrc:
      "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
  },
  {
    label: "Bed & breakfasts",
    imgSrc:
      "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
  },
  {
    label: "",
    imgSrc: "",
  },
  {
    label: "",
    imgSrc: "",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
  },
  {
    label: "",
    imgSrc: "",
  },
  {
    label: "",
    imgSrc: "",
  },
  {
    label: "",
    imgSrc:
      "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
  },
];

function CardList() {
  return (
    <div className="card-list">
      {links.map((link, index) => (
        <div className="card" key={index}>
          <img src={link.imgSrc} alt={link.label} />
          <h3>{link.label}</h3>
        </div>
      ))}
    </div>
  );
}

export default CardList;
