import React, { useState } from "react";

const Semaforo = () => {
  const [semaforoActivo, setSemaforoActivo] = useState(null);

  const handleClick = (color) => {
    setSemaforoActivo(color);
  };

  return (
    <div>
      <button
        className={`semaforoRojo ${semaforoActivo === "rojo" ? "activo" : ""}`}
        onClick={() => handleClick("rojo")}
      >
        Rojo
      </button>
      <button
        className={`semaforoAmarillo ${
          semaforoActivo === "amarillo" ? "activo" : ""
        }`}
        onClick={() => handleClick("amarillo")}
      >
        Amarillo
      </button>
      <button
        className={`semaforoVerde ${
          semaforoActivo === "verde" ? "activo" : ""
        }`}
        onClick={() => handleClick("verde")}
      >
        Verde
      </button>
    </div>
  );
};

export default Semaforo;
