import React, { useReducer } from "react";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
} from "../../types";
import { v4 as uuidv4 } from "uuid";
const ProyectoState = (props) => {
  const proyectosLi = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Wow" },
    { id: 3, nombre: "Warzone" },
    { id: 4, nombre: "Zelda" },
  ];

  const initiarState = {
    proyectos: [],
    formulario: false,
  };

  // Dispath para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initiarState);

  // Serie de funciones para el CRURD

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  // Obtetrner los proyectos

  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectosLi,
    });
  };

  // Agregar nuevo proyecto

  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4();

    // insertar proyecto en el state con un dispath

    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
