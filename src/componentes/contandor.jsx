import React from "react";
import '../hojas_estilo/contandor.css'
function Contador({ numClicks }) {
  return <div className="contador">{numClicks}</div>;
}
export default Contador;
