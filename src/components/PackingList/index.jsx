import React from "react";
import Item from "../Item";
import { initialItems } from "../../data";

export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}
