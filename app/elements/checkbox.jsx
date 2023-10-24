"use client";
import { FaSquare, FaSquareCheck } from "react-icons/fa6";
export default function Checkbox({ isDone, onClick }) {
  return (
    <div onClick={onClick}>
      {!isDone && (
        <button className="flex items-center hover:scale-105 transition-all">
          <FaSquare className="text-gray-100 text-2xl rounded-sm" />
        </button>
      )}
      {isDone && (
        <button className="flex items-center hover:scale-105 transition-all">
          <FaSquareCheck className="text-yellow-500 text-2xl rounded-sm" />
        </button>
      )}
    </div>
  );
}
