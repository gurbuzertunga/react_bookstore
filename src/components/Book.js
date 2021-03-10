import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */

function Book({ book, handleRemoveBook }) {
  const { title, category, author } = book;

  return (
    <div id="book-component" className="flex justify-between p-4 bg-white my-2 mx-9 border">
      <div id="d-book" className="w-1/2">
        <span className="font-semibold text-gray-700">{category}</span>
        <h2 className="font-bold text-2xl my-1">{title}</h2>
        <span className="text-sm text-blue-700">{author}</span>
        <ul className="flex my-3 text-blue-400">
          <li className="pr-3 border-r">Comments</li>
          <li className="px-3 border-r">Remove</li>
          <li className="px-3">Edit</li>
        </ul>
      </div>
      <div id="completion" className="w-1/4 flex">
        <div className="mr-3 progress-icon bg-blue-600 border self-center"></div>
        <div className="progress-number self-center text-center">
          <span className="text-3xl">8%</span> <br/>
          <span className="text-gray-700 ">completed</span>
        </div>
      </div>
      <div id="current-chapter" className="w-1/4">
        <span className="text-gray-700 text-xs">CURRENT CHAPTER</span><br />
        <span className="text-black text-sm">CHAPTER 17</span><br />
        <button className="bg-blue-500 text-sm text-white py-1 px-4 rounded w-100 mt-4">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.defaultProps = {
  book: {},
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
  }),
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
