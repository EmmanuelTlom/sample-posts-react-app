import React from "react";

const Task = ({ task, add }) => {
  return (
    <div className="wrap">
      <div>
        <h4>{task.text}</h4>
        <h4>{task.day}</h4>
      </div>
      <button onClick={() => add(task.id)}>X</button>
    </div>
  );
};

export default Task;
