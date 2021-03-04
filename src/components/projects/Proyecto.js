import React from "react";

const Proyecto = ({ proyectoProps }) => {
  return (
    <li>
      <button type="button" className="btn btn-blank">
        {proyectoProps.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
