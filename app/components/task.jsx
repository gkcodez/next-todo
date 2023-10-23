import { FaStar, FaTrash } from "react-icons/fa6";
import Checkbox from "../elements/checkbox";

export default function Task({
  name,
  isDone,
  priority,
  onToggleTaskStatus: toggleTaskStatus,
  onDeleteTask: deleteTask,
  onPrioritizeTask: prioritizeTask,
}) {
  return (
    <div className="flex flex-col mt-3 w-full">
      <div className="relative flex gap-2 w-full items-center justify-center h-full">
        <div
          className={`${
            isDone ? "opacity-50" : "opacity-100"
          } bg-slate-600 flex gap-2 px-4 py-2 items-center flex gap-2 align-center justify-between rounded-lg w-full`}
        >
          <div className="flex gap-2 items-center">
            <Checkbox
              isDone={isDone}
              onClick={() => toggleTaskStatus(!isDone)}
            />
            <p
              className={`text-md text-gray-100 ${isDone ? "line-through	" : ""}
              }`}
            >
              {name}
            </p>
          </div>
          <div className="flex gap-2 align-items justify-between">
            <button
              className={`p-4 rounded-lg ${
                priority ? "bg-yellow-600" : "bg-gray-700"
              }`}
              onClick={() => prioritizeTask(!priority)}
            >
              <FaStar
                className={`text-white sm:text-sm md:text-md lg:text-lg text-xl`}
              />
            </button>
            <button
              className="p-4 bg-red-600 hover:bg-red-700 rounded-lg"
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
