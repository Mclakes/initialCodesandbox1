import React from "react";

const img = "https://picsum.photos/200";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "green";

function Pictures() {
  return (
    <div>
      <h1 style={{ color: "brown" }}>This is a Group of Beautiful Pictures</h1>

      <div>
        <img
          className="food-image"
          src="https://static.toiimg.com/thumb/52467119.cms?imgsize=1106358&width=509&height=340"
          alt="olalekan"
        ></img>
        <img
          className="food-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QU0Hde1FSEhAgCUtfNh-cRqidPSmvLJaism6tZ2CvwDkkKs2gb_6DFpr3Rlf86eUb_A&usqp=CAU"
          alt="bankole"
        ></img>
        <img
          className="food-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDpcwJ-q4tr6pLogtPvr_x0optChK57_q1mZiy9SgUtGS6HQJrwQ4hz8IC8S2zbMC314&usqp=CAU"
          alt="Rasheed"
        ></img>
      </div>

      <h2 style={customStyle}>This is a paragraph for picsum</h2>

      <img src={img + "?grayscale"} alt="Ancestor"></img>
    </div>
  );
}

export default Pictures;
