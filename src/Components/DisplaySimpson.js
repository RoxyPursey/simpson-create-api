import React from "react";

function DisplaySimpson({
  Simpson
}) {
  return ( <
    div className = "DisplayEmployee" >
    <
    img src = {
      Simpson.image
    }
    alt = {
      Simpson.character
    }
    /> <
    h1 > {
      Simpson.character
    } < /h1> <
    p > {
      Simpson.quote
    } < /p> <
    /div>
  );
}

export default DisplaySimpson;