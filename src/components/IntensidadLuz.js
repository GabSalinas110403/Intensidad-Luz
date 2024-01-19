import React, { useState } from "react";
import "../styles.css"; // Asegúrate de importar el archivo de estilos

export function IntensidadLuz() {
  const intensidad = ["apagado", "encendido al 25%", "encendido al 50%", "encendido al 75%", "encendido al 100%"];
  const [intensidadFinal, establecerIntensidad] = useState("apagado");

  const aumentar = () => {
    const intensidadActual = intensidad.indexOf(intensidadFinal);
    establecerIntensidad(intensidadActual < intensidad.length - 1 ? intensidad[intensidadActual + 1] : "apagado");
  };

  const disminuir = () => {
    const intensidadActual = intensidad.indexOf(intensidadFinal);
    establecerIntensidad(intensidadActual > 0 ? intensidad[intensidadActual - 1] : "encendido al 100%");
  };

  const resetear = () => {
    establecerIntensidad("apagado");
  };

  return (
    <div className="intensidad-luz-container">
      <h3>Intensidad de luz: {intensidadFinal}</h3>
      <div className="botones-container">
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={disminuir}>Disminuir</button>
        <button onClick={resetear}>Resetear</button>
      </div>
    </div>
  );
}
