import { useState } from "react";

export const Eventos = () => {
  const [clicks, setClicks] = useState(0);
  const changeClicks = () => {
    setClicks(clicks + 1);
  };

  const [scope, setScope] = useState("Fuera!");
  const changeScopeDentro = () => {
    setScope("Dentro!");
  };

  const changeScopeFuera = () => {
    setScope("Fuera!");
  };
  return (
    <div className="eventos">
    <h2>Ejercicio 2.5</h2>
      <button onClick={changeClicks}>Clicks: {clicks}</button>

      <div onMouseEnter = {changeScopeDentro} onMouseLeave = {changeScopeFuera}>Soy un div desde: {scope}</div>
    </div>
  );
};
