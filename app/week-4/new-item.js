import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const handleSubmit = (event) => {
        event.preventDefault();
    const item = {name, quantity, category};
    console.log(item);
    alert(Name: ${name}, Quantity: ${quantity}, Category: ${category});
    
    setName("");
    setQuantity(1);
    setCategory("produce");    
    }

    return (
        <form onSubmit={handleSubmit}>
      {/* Name Field */}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
        required
      />

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );

}

