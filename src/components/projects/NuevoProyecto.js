import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
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

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>

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
    </Fragment>
  );
};

export default NuevoProyecto;
