import React from "react";

export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding the items</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? `You got Everything ready to go!!`
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked}(${percent}%)`}
      </em>
    </footer>
  );
}
