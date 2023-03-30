import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      // Si la validación da error setea el mensaje en el state
      setMensaje("No es un presupuesto valido");
      return;
    }
    // Si es correcto entonces deja vacio el state y desaparece la alerta
    setMensaje("");
    setIsValidPresupuesto(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuesto}>
        {" "}
        {/*Pasa los datos al validador*/}
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />{" "}
          {/*Con el onChange setea el state de presupuesto*/}
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}{" "}
        {/*Se crea el mensaje de error*/}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
