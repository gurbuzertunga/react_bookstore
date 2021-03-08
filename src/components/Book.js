import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book }) {
  const { id, title, category } = book;

  const handleRemove = () => {

  };

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="submit" onClick={handleRemove(book)}>Remove Book</button>
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
