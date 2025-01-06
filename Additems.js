import React, { useState, useCallback } from "react";

const Item = React.memo(({ item }) => {
  return <li>{item}</li>;
});

const Additems = () => {
  const [items, setItems] = useState([]);

  const addItem = useCallback(() => {
    setItems((e) => [...e, `Item ${e.length + 1}`]);
  }, []);

  return (
    <div>
      <h1>Item List</h1>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Additems;
