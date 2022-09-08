import React from "react";
import TasksContainer from "./components/TasksContainer/TasksContainer";
import { AppContextWrapper } from "./store/AppContext";

const App = () => {
  return (
    <AppContextWrapper>
      <div>
        <h4>Listado de tareas Demo Web Avanzada</h4>
        <hr />
      </div>
      <TasksContainer />
    </AppContextWrapper>
  );
};

export default App;
