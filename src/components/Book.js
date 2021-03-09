import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, handleRemoveBook }) {
  const { id, title, category } = book;

  const removeBookHandler = () => {
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
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
