import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { initialItems } from "./data";

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(newItem){
    setItems(items => [...items, newItem]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem}/>
      <PackingList items={items}/>
      <Stats />
    </div>
  );
}

export default App;
