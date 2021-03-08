import React from 'react';

export default function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form onSubmit={() => null}>
      <label htmlFor="title">
        Title:
        <input type="text" name="title" id="title" required />
      </label>

      <label htmlFor="category">
        Choose a category:
        <select name="category" id="category">
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
