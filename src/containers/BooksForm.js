import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const data = {
  title: '',
  category: 'Action',
};

function BooksForm() {
  const [state, setState] = useState(data);
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleInputChange = e => {
    const addBook = { ...state };
    addBook[e.target.name] = e.target.value;
    setState(addBook);
  };

  const handleSubmit = e => {
    const newID = Math.floor(Math.random() * 100);
    createBook({ ...state, newID });
    e.preventDefault();
    setState({
      title: '',
      category: '',
    });
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

export default connect(
  null,
  { createBook },
)(BooksForm);
