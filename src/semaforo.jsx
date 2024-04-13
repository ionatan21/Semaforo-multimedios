import React, { useReducer } from "react";

const initialState = { semaforoActivo: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "CAMBIAR_COLOR":
      return { ...state, semaforoActivo: action.payload };
    default:
      return state;
  }
};

const Semaforo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (color) => {
    dispatch({ type: "CAMBIAR_COLOR", payload: color });
  };

  return (
    <div className="semaforo">
      <button
        className={`semaforoRojo ${
          state.semaforoActivo === "rojo" ? "activo" : ""
        }`}
        onClick={() => handleClick("rojo")}
      >
        Rojo
      </button>
      <button
        className={`semaforoAmarillo ${
          state.semaforoActivo === "amarillo" ? "activo" : ""
        }`}
        onClick={() => handleClick("amarillo")}
      >
        Amarillo
      </button>
      <button
        className={`semaforoVerde ${
          state.semaforoActivo === "verde" ? "activo" : ""
        }`}
        onClick={() => handleClick("verde")}
      >
        Verde
      </button>

    </div>
  );
};

export default Semaforo;
