import React, { useContext, useEffect } from "react";
import { productsContext } from "../../context/productContext";
import "./cardStyles.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";

const CustomCard = () => {
  const { products, getProducts, getCategories, categories } =
    useContext(productsContext);
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  console.log(categories, "dhsfhfsdj");
  console.log(categories, "products");

  const card = {
    title: "Your Card Title",
    rating: 4.5,
    desc: "Your card description",
    date: "Your card date",
    price: 100, // Replace with your desired price
    imgSrc: [
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=720",
    ],
  };

  return (
    <div className="card-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        // modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} className="card-img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-info-flex">
        <h3 className="card-title">{card.title}</h3>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <p>{card.rating}</p>
        </div>
      </div>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.desc}</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
        <span style={{ fontWeight: "600" }}>₹{card.price}</span> night
      </p>
    </div>
  );
};

export default CustomCard;

// import React, { useContext, useEffect } from "react";
// import { productsContext } from "../../context/productContext";
// import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const CustomCard = () => {
//   const { products, getProducts, getCategories, categories } =
//     useContext(productsContext);
//   useEffect(() => {
//     getProducts();
//     getCategories();
//   }, []);
//   console.log(categories, "dhsfhfsdj");
//   console.log(categories, "products");

//   const card = {
//     title: "Your Card Title",
//     rating: 4.5,
//     desc: "Your card description",
//     date: "Your card date",
//     price: 100, // Replace with your desired price
//     imgSrc: [
//       "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=720",
//     ],
//   };

//   return (
//     <div className="card-box">
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={15}
//         loop={true}
//         mousewheel={true}
//         cssMode={true}
//         pagination
//         className="swiper-container"
//       >
//         {card.imgSrc.map((src, i) => (
//           <SwiperSlide key={i}>
//             <img src={src} className="card-img" alt="Card Image" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="card-info-flex">
//         <h3 className="card-title">{card.title}</h3>
//         <div className="card-rating">
//           <StarRateRoundedIcon />
//           <p>{card.rating}</p>
//         </div>
//       </div>
//       <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.desc}</p>
//       <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p>
//       <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black)" }}>
//         <span style={{ fontWeight: "600" }}>₹{card.price}</span> night
//       </p>
//     </div>
//   );
// };

// export default CustomCard;
