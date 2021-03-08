import React from 'react';
import PropTypes from 'prop-types';
import { removeBook } from '../actions';

export default function Book({ book }) {
  const { id, title, category } = book;

  const handleRemoveBook = book => {
    removeBook(book);
  };

  const removeBookHandler = () => {
    console.log(book);
    handleRemoveBook(book);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="submit" onClick={removeBookHandler}>Remove Book</button>
      </td>
    </tr>
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
  }),
};
