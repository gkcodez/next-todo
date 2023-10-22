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
      <div className="relative cursor-pointer flex gap-2 w-full items-center justify-center h-full">
        <div
          className={`${
            isDone ? "opacity-70" : "opacity-100"
          } bg-gray-600 flex gap-2 p-2 items-center flex gap-2 align-center justify-between bg-gray-50 border border-gray-100  rounded-lg w-full`}
          onClick={() => toggleTaskStatus(!isDone)}
        >
          <div className="flex gap-2 p-5 items-center">
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
        </div>
        <button
          className={`p-4 rounded-lg ${
            priority ? "bg-yellow-600" : "bg-gray-600"
          }`}
          onClick={() => prioritizeTask(!priority)}
        >
          <FaStar className={"text-white text-2xl"} />
        </button>
        <button
          className="p-4 bg-red-500 hover:bg-red-700 rounded-lg"
          onClick={() => deleteTask()}
        >
          <FaTrash className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
}
