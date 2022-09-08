import React from "react";
import TasksContainer from "./components/TasksContainer/TasksContainer";
import { AppContextWrapper } from "./store/AppContext";

const App = () => {
  return (
    <AppContextWrapper>
      <div>Holis Andre, puedes poner bonito este titulo? :3 </div>
      <TasksContainer />
    </AppContextWrapper>
  );
};

export default App;
