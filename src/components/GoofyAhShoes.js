import React from "react";

const GoofyAhShoes = ({ image, desc }) => {
  return (
    <div>
      <div id="outer">
        <img src={image} alt="" />
        <div>
          <p>
            <strong>{desc}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoofyAhShoes;
