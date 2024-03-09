import React from "react";
import { useState } from "react";
import { FiTrash } from "react-icons/fi";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  function addTodo(event) {
    // let newList = [...todoList];
    // newList.push(input);
    // setTodoList(newList);
    event.preventDefault();
    if (input !== "") {
      setTodoList([...todoList, { text: input, completed: false }]);
      setInput("");
    }
  }

  function deleteTodo(index) {
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function toggleTodoComplete(index) {
    let newTodoList = [...todoList];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  }

  return (
    <form onSubmit={addTodo} className="w-[600px] bg-white p-6 rounded-lg">
      <h1 className="font-bold">To-Do List</h1>
      <div className="flex items-center justify-center mt-3">
        <input
          className="basis-4/5 border border-stone-200 p-2 "
          type="text"
          placeholder="Enter a new task"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          className="basis-1/5 bg-black text-white ml-2 hover:bg-slate-600 active:bg-slate-800"
          type="submit"
        >
          Add
        </button>
      </div>

      <ul>
        {todoList.map((list, index) => {
          return (
            <div className="flex mt-2">
              <li
                key={index}
                className={`basis-4/5 text-left ${
                  list.completed ? "line-through" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={list.completed}
                  className="mr-2"
                  onChange={() => toggleTodoComplete(index)}
                />
                {list.text}
              </li>
              <button className="basis-1/5" onClick={() => deleteTodo(index)}>
                <FiTrash />
              </button>
            </div>
          );
        })}
      </ul>
    </form>
  );
};

export default Todo;
