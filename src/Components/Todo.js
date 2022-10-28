import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeToDo, removeToDo, updateToDo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateToDo(edit.id, value)
    setEdit({
      id: null,
      value: "",
    });
  };

  if(edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  // - changes the backgroung if to do was done
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "toddo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeToDo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeToDo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

// - npm react-icons
export default Todo;
