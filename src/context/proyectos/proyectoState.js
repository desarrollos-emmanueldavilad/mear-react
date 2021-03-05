import React, { useReducer } from "react";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../types";

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

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
