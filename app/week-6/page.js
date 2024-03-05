'use client';
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from './NewItem';
import ItemList from './ItemList';
import itemsData from './items.json';

const Page = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

function handleAddItem(newItem) {
  setItems([...items, newItem]);
}

function ShoppingList() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}

export default Page;
