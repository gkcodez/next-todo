"use client";
import { FaSquare, FaSquareCheck } from "react-icons/fa6";
export default function Checkbox({ isDone, onClick }) {
  return (
    <div onClick={onClick}>
      {!isDone && (
        <button>
          <FaSquare className="text-gray-100 text-4xl rounded-sm" />
        </button>
      )}
      {isDone && (
        <button>
          <FaSquareCheck className="text-yellow-500 text-4xl rounded-sm" />
        </button>
      )}
    </div>
  );
}
