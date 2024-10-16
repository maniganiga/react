import React from "react";
import shoe1 from "../img/image1.png";
import shoe2 from "../img/image6.png";
import GoofyAhShoes from "./GoofyAhShoes";
const ShoesList = () => {
  const mm = [
    { image: shoe1, desc: "t1gutal" },
    { image: shoe2, desc: "ahiuadt1gutal" },
  ];
  return (
    <div>
      {mm.map((m) => (
        <GoofyAhShoes image={m.image} desc={m.desc} />
      ))}
    </div>
  );
};

export default ShoesList;
