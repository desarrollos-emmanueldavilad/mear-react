import React from "react";
import Proyecto from "./Proyecto";
const ListadoProyectos = () => {
  const proyectos = [
    { nombre: "Tienda Virtual" },
    { nombre: "Wow" },
    { nombre: "Warzone" },
  ];

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto key="proyecto.id" proyectoProps={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
