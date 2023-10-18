import React, { useState } from "react";
import { links } from "../../components/CardList/CardList";
import "./styles.css";
import { useSearchParams } from "react-router-dom";

function FilterM({ selectedFilter, setSelectedFilter }) {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (value) => {
    setSearch(value);
    searchParams.set("category", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="filter-div">
      {links.map((item, i) => (
        <div
          key={i}
          className={`links-box ${i == selectedFilter && "selected-box"}`}
          onClick={() => {
            console.log("selecting key", i);
            onChange(item.label);
          }}
        >
          <img src={item.imgSrc} className="links-img" />
          <p
            className={`links-label ${i == selectedFilter && "selected-label"}`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FilterM;
