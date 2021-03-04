import React from "react";
import SideBar from "../layout/Sidebar";
import Barra from "../layout/Barra";
import FormTarea from "../tasks/FormTarea";
const Proyectos = () => {
  return (
    <div className="contenedor-app">
      <SideBar />
      <div className="seccion-principal">
        <Barra />
        <main>
          <FormTarea />
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
