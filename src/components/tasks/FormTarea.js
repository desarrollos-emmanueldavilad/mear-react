import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/proyectoContext";
const FormTarea = () => {
  //Obterner si un proyecto esta activo

  const proyectosContext = useContext(ProyectoContext);

  const { proyecto } = proyectosContext;

  if (!proyecto) return null;

  //Array destructurin para extraer el proyectoi actual

  const [proyectoActual] = proyecto;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            nombre="nombre"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
