import React, { Fragment, useContext, useState } from "react";
import ProyectoContext from "../../context/proyectos/proyectoContext";
const NuevoProyecto = () => {
  //Obternet el State del formulario

  const proyectosContext = useContext(ProyectoContext);
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  // state para proyecto

  const [proyecto, setGuardarproyecto] = useState({
    nombre: "",
  });

  // Extraetr nombre de proyecto

  const { nombre } = proyecto;

  const onChangeProyecto = (e) => {
    setGuardarproyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //Submit

  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //validar el proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }
    //agregar al state
    agregarProyecto(proyecto);
    //Reiniciar le form

    setGuardarproyecto({
      nombre: "",
    });
  };

  //Abrir el formulario presionando el boton

  const onClickFormulario = () => {
    mostrarFormulario();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form onSubmit={onSubmitProyecto} className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre del Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar proyecto"
          />
        </form>
      ) : null}

      {errorformulario ? (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
