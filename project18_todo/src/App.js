import Board from "./component/Board";
import InputComponent from "./component/InputComponent";
import { useState } from "react";

function App() {

  const [taskList, setTaskList] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-3xl mb-6 font-bold">Todo Board</h1>
      <InputComponent taskList={taskList} setTaskList={setTaskList} />
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12 ">
        {taskList.map((task, index) =>
          <Board
            key={index}
            index={index}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
