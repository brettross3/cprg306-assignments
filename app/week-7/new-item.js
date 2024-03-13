import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const handleSubmit = (event) => {
        event.preventDefault();
    const item = {name, quantity, category};
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    
    setName("");
    setQuantity(1);
    setCategory("produce");    
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-black shadow-md rounded-md">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 p-2 w-full border rounded-md text-black focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
    
            {/* Quantity Field */}
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-600">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
                min="1"
                max="99"
                className="mt-1 p-2 w-full border rounded-md text-black focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
    
            {/* Category Field */}
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                Category:
              </label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md text-black focus:outline-none focus:ring focus:border-blue-300"
                required
              >
                <option value="" disabled>Select a category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
              </select>
            </div>
    
            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 text-black p-2 rounded-md">
              Submit
            </button>
          </form>
        </div>
      );
    }

