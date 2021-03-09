import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
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
        {books.map(
          book => <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />,
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => {
  const { books } = state;
  return { books };
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { removeBook })(BooksList);
