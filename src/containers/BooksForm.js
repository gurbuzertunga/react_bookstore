import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const data = {
  id: '',
  title: '',
  category: 'Action',
  author: '',
};

function BooksForm({ createBook }) {
  const [state, setState] = useState(data);
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleInputChange = e => {
    const addBook = { ...state };
    addBook[e.target.name] = e.target.value;
    setState(addBook);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createBook({ ...state, id: Math.floor(Math.random() * 100) });
    setState({
      title: '',
      category: '',
      author: '',
    });
  };

  return (
    <div className="flex flex-col w-full px-12 py-12">
      <h2 className="text-2xl font-bold text-gray-500">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} method="POST" className="flex flex-col md:flex-row mt-5">
        <input className="md:w-5/12 mr-4 my-3 pl-4 border border-gray-300 bg-white" placeholder="Book Title" type="text" name="title" id="title" value={state.title} onChange={handleInputChange} required />
        <input className="md:w-3/12 mr-4 my-3 pl-4 border border-gray-300 bg-white" placeholder="Author" type="text" name="author" id="author" value={state.author} onChange={handleInputChange} required />
        <select className="md:w-2/12 mr-4 my-3 text-gray-500 pl-4 border border-gray-300 bg-white" name="category" id="category" value={state.category} onChange={handleInputChange}>
          <option key="default" disabled defaultValue="None">Category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button className="md:w-2/12 mr-4 px-4 py-3 my-3 bg-blue-800 text-white rounded" type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default connect(
  null,
  { createBook },
)(BooksForm);

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
