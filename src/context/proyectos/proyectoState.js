import React, { useReducer } from "react";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
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
    errorformulario: false,
    proyecto: null,
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

  // VALIDA EL FORMULARIO POR ERRORES

  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  // Se4lecciona el proyecto que le usuario dio click

  const proyectoActual = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    });
  };

  // eliminar proyecto

  const eliminarProyecto = (proyectoId) => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId,
    });
  };
  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
