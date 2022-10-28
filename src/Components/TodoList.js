import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  // - dynamic list of things to do
  const [todos, SetTodos] = useState([]);

  //   - if the users doens't write any text in the input tag OR there are alot of spaces between letters IGNORE it
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    // - creates a variable to hold the new thing to do, to be added to the list of things to do already in the array
    const newTodos = [todo, ...todos];

    // - set to dos to the new thing added to the list - UPDATING THE VALUES IN THE ARRAY
    SetTodos(newTodos);
    // console.log(...todos)
  };

  //   - edit the todo
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    SetTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  //   -update the list of todos to the removeArr after is has removed the id that matches the request
  const removeToDo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    SetTodos(removeArr);
  };

  const completeToDo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    SetTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What's on the list of ToDo's Today?</h1>
      <TodoForm onSubmit={addTodo}></TodoForm>
      <Todo
        todos={todos}
        completeTodo={completeToDo}
        removeToDo={removeToDo}
        updateTodo={updateTodo}
      ></Todo>
    </div>
  );
}

export default TodoList;
