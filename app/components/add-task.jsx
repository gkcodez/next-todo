"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function AddTask({ onAdd }) {
  const [task, setTask] = useState({
    name: "",
    isDone: false,
    priority: false,
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.value?.trim() == "") {
      setTask({ ...task, name: "" });
    } else {
      setTask({ ...task, name: event.target.value });
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (task.name?.trim() == "") {
      return;
    }
    onAdd(task);
    setTask({
      name: "",
      isDone: false,
      priority: false,
    });
  };

  return (
    <form className="flex gap-3 w-full" onSubmit={handleClick}>
      <div className="w-full">
        <input
          type="text"
          placeholder="Eg: Buy groceries"
          className="border-2 rounded-md p-6 w-full"
          value={task.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-2 items-center">
        <button
          type="submit"
          className={`${
            task.name != "" ? "bg-sky-600" : "bg-gray-600"
          } font-medium  text-white p-4 rounded-md hover:scale-105 transition-all`}
          hidden={task.name == ""}
        >
          <FaPlus className="text-2xl" />
        </button>
      </div>
    </form>
  );
}
