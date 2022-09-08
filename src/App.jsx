import React from "react";
import TasksContainer from "./components/TasksContainer/TasksContainer";
import { AppContextWrapper } from "./store/AppContext";

const App = () => {
  return (
    <AppContextWrapper>
      <div>
        <h4 className="text-center"><strong>Listado de tareas</strong> </h4>
        </div>
      <TasksContainer />
    </AppContextWrapper>
  );
};

export default App;
