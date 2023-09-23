import React from "react";

export function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        style={{ color: "#FF0000", fontSize: "40px" }}
        onClick={() => onDeleteItem(item.id)}
      >
        &times;
      </button>
    </li>
  );
}
