import React from "react";
import Post from "./Post";

const Tasks = ({ tasks, removePost }) => {
  //console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Post key={task.id} task={task} add={removePost} />
      ))}
    </div>
  );
};

export default Tasks;
