
import React from "react";

function SelectionBox({ title, description, selected, onToggle }) {
    return (
    <div
        onClick={onToggle}
        className={`cursor-pointer p-5 rounded-2xl border transition-all duration-200 w-64
        ${
            selected
            ? "bg-blue-500 text-white border-blue-600 scale-105"
            : "bg-white text-gray-800 border-gray-300 hover:bg-blue-100"
        }`}
    >
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
    </div>
    );
}

export default SelectionBox;



