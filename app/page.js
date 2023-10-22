"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import AddTask from "./components/add-task";
import Task from "./components/task";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    setTasks(tasks);
  }, []);

  useEffect(() => {
    if (tasks.length == 0) {
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task) {
    setTasks((prev) => {
      return [...prev, task];
    });
  }

  function toggleTaskStatus(index, isDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].isDone = isDone;
      return newTasks;
    });
  }

  function deleteTask(index) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks.splice(index, 1);
      return newTasks;
    });
  }

  function prioritizeTask(index, priority) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].priority = priority;
      console.log(priority);
      return newTasks;
    });
  }

  return (
    <div className="relative flex align-center justify-center h-screen bg-gray-900">
      <div className="my-8 w-2/3">
        <h3 className="text-sky-200 text-4xl font-medium uppercase text-center">
          Todo List
        </h3>
        <h3 className="text-white text-xl font-medium uppercase text-center my-5">
          ( {tasks?.filter((task) => task.isDone).length} / {tasks?.length} )
          Completed
        </h3>
        <AddTask onAdd={addTask} className="mt-10" />
        {tasks &&
          tasks.map((task, i) => {
            return (
              <Task
                key={i}
                {...task}
                onToggleTaskStatus={() => toggleTaskStatus(i, !task.isDone)}
                onDeleteTask={() => deleteTask(i)}
                onPrioritizeTask={() => prioritizeTask(i, !task.priority)}
              />
            );
          })}
        {tasks && tasks.length == 0 && (
          <div className="flex align-center justify-center mt-10">
            <Image
              title="Empty task list"
              alt="Empty task list"
              src="/images/empty_task.png"
              width={350}
              height={350}
            />
          </div>
        )}
      </div>
    </div>
  );
}
