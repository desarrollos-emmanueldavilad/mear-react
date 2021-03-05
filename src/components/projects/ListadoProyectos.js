import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  //Extraer proyectos del state inicial

  const listaProyectosContext = useContext(ProyectoContext);
  const { proyectos, obtenerProyectos } = listaProyectosContext;

  // Obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);

  // revisar si proyectos tienen contenido
  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto key="proyectos.id" proyectoProps={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
