import React, { useState } from 'react';

const data = {
  title: '',
  category: 'Action',
};

export default function BooksForm() {
  const [state, setState] = useState(data);
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleInputChange = e => {
    const addBook = { ...state };
    addBook[e.target.name] = e.target.value;
    setState(addBook);
  };

  const handleSubmit = e => {
    console.log(state);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input type="text" name="title" id="title" value={state.title} onChange={handleInputChange} required />
      </label>

      <label htmlFor="category">
        Choose a category:
        <select name="category" id="category" value={state.category} onChange={handleInputChange}>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Add Book</button>
    </form>
  );
}
