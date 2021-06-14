import React from "react";

const Cards = ({ logo, title, price, description }) => {
  return (
    <div
      style={{
        height: 300,
        width: 200,
        backgroundColor: "lightblue",
        marginLeft: 100,
        borderRadius: 10,
        marginBottom: 100,
        float: "left",
        clear: "both"
      }}
    >
      <h1 style={{ marginTop: 20, textAlign: "center" }}>LOGO</h1>
      <h3 style={{ marginTop: 20, textAlign: "center" }}>{title}</h3>
      <h2 style={{ marginTop: 20, textAlign: "center" }}>{price}</h2>
      <p style={{ marginTop: 20, textAlign: "center" }}>{description}</p>
      <button
        style={{
          width: 150,
          backgroundColor: "black",
          color: "white",
          height: 50,
          borderRadius: 10,
          marginTop: 50,
          marginLeft: 30,
        }}
      >
        Choose a plan
      </button>
    </div>
  );
};

export default Cards;
