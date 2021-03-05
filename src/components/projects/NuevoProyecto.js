import React, { Fragment, useContext, useState } from "react";
import ProyectoContext from "../../context/proyectos/proyectoContext";
const NuevoProyecto = () => {
  //Obternet el State del formulario

  const proyectosContext = useContext(ProyectoContext);
  const { formulario, mostrarFormulario } = proyectosContext;

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

    //agregar al state

    //Reiniciar le form
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
    </Fragment>
  );
};

export default NuevoProyecto;
