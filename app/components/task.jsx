import { FaStar, FaTrash } from "react-icons/fa6";
import Checkbox from "../elements/checkbox";

export default function Task({
  task: task,
  onToggleTaskStatus: toggleTaskStatus,
  onDeleteTask: deleteTask,
  onPrioritizeTask: prioritizeTask,
}) {
  return (
    <div className="flex flex-col mt-3 w-full">
      <div className="relative flex gap-2 w-full items-center justify-center h-full">
        <div
          className={`${
            task.isDone ? "opacity-50" : "opacity-100"
          } bg-slate-600 flex gap-2 px-4 py-2 items-center flex gap-2 align-center justify-between rounded-lg w-full h-full`}
        >
          <div className="flex gap-2 items-center w-full h-full">
            <Checkbox
              isDone={task.isDone}
              onClick={() => toggleTaskStatus(!task.isDone)}
            />

            <div className="w-full h-full">
              <p
                className={`text-md text-gray-100 ${
                  task.isDone ? "line-through	" : ""
                }}`}
              >
                {task.name}
              </p>
            </div>
          </div>
          <div className="flex gap-2 align-items justify-between">
            <button
              className={`p-4 rounded-lg ${
                task.priority
                  ? "bg-yellow-600"
                  : "bg-gray-700 hover:scale-105 transition-all"
              }`}
              onClick={() => prioritizeTask(!task.priority)}
            >
              <FaStar
                className={`text-white sm:text-sm md:text-md lg:text-lg text-xl`}
              />
            </button>
            <button
              className="p-4 bg-red-700 rounded-lg hover:scale-105 transition-all focus:scale-110"
              onClick={() => deleteTask()}
            >
              <FaTrash className="text-white sm:text-sm md:text-md lg:text-lg text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
