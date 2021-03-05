/* eslint-disable */
import React from 'react';

export default function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form name="addBookForm">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" required />

      <label htmlFor="category">Choose a category:</label>
      <select name="category" id="category">
        <option value="" />
      </select>

      <button type="submit">Add Book</button>
    </form>
  );
}
