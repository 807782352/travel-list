import React from "react";
import Item from "../Item";

export default function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}
