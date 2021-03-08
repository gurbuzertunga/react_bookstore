import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
        <th>Remove Book</th>
      </tr>
    </thead>
    <tbody>
      {books && books.length
        ? books.map(book => <Book key={book.id} book={book} />)
        : 'No Book Found!'}
    </tbody>
  </table>
);

const mapStateToProps = state => {
  const { books } = state;
  return books;
};

export default connect(mapStateToProps)(BooksList);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};
