"use client";
import { FaSquare, FaSquareCheck } from "react-icons/fa6";
export default function Checkbox({ isDone, onClick }) {
  return (
    <div onClick={onClick}>
      {!isDone && (
        <div>
          <FaSquare className="text-gray-100 text-4xl rounded-sm" />
        </div>
      )}
      {isDone && (
        <div>
          <FaSquareCheck className="text-yellow-500 text-4xl rounded-sm" />
        </div>
      )}
    </div>
  );
}
