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
      const newTasks = [...prev, task];
      newTasks.sort((a, b) => {
        return a.isDone === b.isDone ? 0 : !a.isDone ? -1 : 1;
      });
      return newTasks;
    });
  }

  function toggleTaskStatus(index, isDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].isDone = isDone;
      newTasks.sort((a, b) => {
        return a.isDone === b.isDone
          ? a.priority
            ? -1
            : 0
          : !a.isDone
          ? -1
          : 1;
      });
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
      newTasks.sort((a, b) => {
        return a.priority === b.priority ? 0 : a.priority ? -1 : 1;
      });
      return newTasks;
    });
  }

  return (
    <div className="relative flex flex-col align-center justify-between w-full h-screen">
      <div className="w-full h-44 bg-emerald-700"></div>
      <div className="absolute w-full flex items-start justify-center h-screen">
        <div className="z-0 pt-8 mx-5 xl:w-3/4 lg:w-3/4 md:w-full sm:w-full w-full h-screen">
          <h3 className="text-white text-3xl font-medium uppercase text-center">
            Todo List
          </h3>
          <h3 className="text-white text-xl font-medium uppercase text-center mt-3 mb-5">
            Tasks Completed ( {tasks?.filter((task) => task.isDone).length} /{" "}
            {tasks?.length} )
          </h3>
          <AddTask onAdd={addTask} className="mt-10" />
          <div className="xl:h-4/6 lg:h-4/6 md:h-4/6 h-full overflow-y-scroll">
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
      </div>
      {/* <div className="z-10 bg-emerald-600 p-2 flex align-center justify-center text-xl text-white font-medium uppercase">
        <button type="button">
          <FaStopwatch className="text-5xl" />
        </button>
      </div> */}
    </div>
  );
}
