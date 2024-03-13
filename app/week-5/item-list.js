"use client";
import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
 const [sortBy, setSortBy] = useState('name');

 const sortedItems = items.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
 });

 return (
  <div>
     <h2 class="text-xl font-bold">Sort by:</h2>
     <div className="space-x-4">
       <button onClick={() => setSortBy('name')} className="bg-orange-500 p-1 m-2 w-28" style={{backgroundColor: sortBy === 'name' ? 'orange' : 'darkorange'}}>Name</button>
       <button onClick={() => setSortBy('category')} className="bg-orange-500 p-1 m-2 w-28" style={{backgroundColor: sortBy === 'category' ? 'orange' : 'darkorange'}}>Category</button>
     </div>
     <ul>
       {sortedItems.map(item => (
         <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
       ))}
     </ul>
  </div>
 );
};

export default ItemList;