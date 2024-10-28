import React from "react";

const GoofyAhShoes = ({ image, desc }) => {
  return (
    <div>
      <div id="outer">
        <img src={image} alt="" id="sized" />
        <div>
          <p id="name">
            <strong>{desc}</strong>
          </p>
          <p id="title">Nike shoes</p>
        </div>
      </div>
    </div>
  );
};

export default GoofyAhShoes;
