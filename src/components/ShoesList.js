import React from "react";
import shoe1 from "../img/image1.png";
import shoe2 from "../img/image6.png";
import GoofyAhShoes from "./GoofyAhShoes";
const ShoesList = () => {
  const mm = [
    { image: shoe1, desc: "Nike Blazer Mid '77" },
    { image: shoe2, desc: "Nike Mid 9/11" },
    { image: shoe1, desc: "Nike Blazer Mid '77" },
    { image: shoe2, desc: "Nike Mid 9/11" },
    { image: shoe1, desc: "Nike Blazer Mid '77" },
    { image: shoe2, desc: "Nike Mid 9/11" },
  ];
  return (
    <div id="rowlist">
      {mm.map((m) => (
        <GoofyAhShoes image={m.image} desc={m.desc} />
      ))}
    </div>
  );
};

export default ShoesList;
