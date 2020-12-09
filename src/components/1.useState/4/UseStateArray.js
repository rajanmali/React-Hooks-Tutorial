import { useState } from "react";

const UseStateArray = () => {
  const [itemList, setItemList] = useState([]);
  const [itemName, setItemName] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setItemName(value);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    if (itemName.length > 0) {
      setItemList((prevItemsList) => [
        ...prevItemsList,
        {
          id: Math.floor(Math.random() * itemName.length) + 1,
          name: itemName,
        },
      ]);
      setItemName("");
    }
  };

  const handleClearItemList = (event) => {
    event.preventDefault();
    setItemList([]);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter Item Name..."
          name="itemName"
          value={itemName}
          onChange={handleInputChange}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </form>
      <h3>Item List:</h3>
      <ul>
        {itemList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {itemList?.[0] && (
        <button onClick={handleClearItemList}>Clear All Items</button>
      )}
    </>
  );
};

export default UseStateArray;
