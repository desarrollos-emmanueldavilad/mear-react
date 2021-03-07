import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import ProyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  //Obterner el State de proyectos

  const proyectosContext = useContext(ProyectoContext);

  const { proyecto, eliminarProyecto } = proyectosContext;

  // si no hay proyecto seleccionado

  if (!proyecto) {
    return <h2>Selecciona un proyecto</h2>;
  }

  //Array destructurin para extraer el proyectoi actual

  const [proyectoActual] = proyecto;

  const tareasProyecto = [];

  // ELimina un proyecto

  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };

  return (
    <Fragment>
      <h2>{proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}

        <button
          type="button"
          className="btn btn-eliminar"
          onClick={onClickEliminar}
        >
          Eliminar Proyecto &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
