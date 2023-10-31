import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);

    if (!description) return;

    const newItem = {
      id: uuidv4(),
      description: { description },
      quantity: { quantity },
      packed: false,
    };

    setDescription("");
    setQuantity(1);
  }

  function handleChange(event) {
    setDescription(event.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (curEle, curIdx) => curIdx + 1).map(
          (num) => {
            return (
              <option value={num} key={num}>
                {num}
              </option>
            );
          }
        )}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
