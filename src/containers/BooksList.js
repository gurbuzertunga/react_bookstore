import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => ( // eslint-disable-line
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    {books && books.length // eslint-disable-line
      ? books.map(book => <Book key={book} book={book} />) // eslint-disable-line
      : 'No Book Found!'}
  </table>
);

const mapStateToProps = state => {
  const { books } = state;
  return books;
};

export default connect(mapStateToProps)(BooksList);

Book.defaultProps = {
  books: {},
};

Book.propTypes = {
  books: PropTypes.shape({
    length: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
};
