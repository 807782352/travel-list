import React from "react";

export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);

  if (numItems === 0) {
    return (
      <footer className="stats">
        <em>Add some items for preparation 👜 !!!</em>
      </footer>
    );
  }

  return (
    <footer className="stats">
      <em>
        {numItems === numPacked
          ? "You are ready to go ✈️!!!"
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentPacked}%) `}
      </em>
    </footer>
  );
}
