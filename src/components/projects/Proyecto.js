import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareasContext";

const Proyecto = ({ proyectoProps }) => {
  //Obterner el State de proyectos

  const proyectosContext = useContext(ProyectoContext);

  const { proyectoActual } = proyectosContext;

  // Obtener la funcion de context de tarea

  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareaContext;
  // Funcion para agregar el proyecto actula

  const seleccionarProyecto = (id) => {
    proyectoActual(id); //Fijar un proyecto actular
    obtenerTareas(id); // Filtrar las tareas cuando se le da click
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyectoProps.id)}
      >
        {proyectoProps.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
