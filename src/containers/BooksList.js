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
    <>
      {books.map(
        book => <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />,
      )}
    </>
  );
};

const mapStateToProps = state => {
  const { books } = state;
  const { filter } = state;
  if (filter !== 'All') {
    const result = books.filter(book => book.category === filter);
    return { books: result };
  }
  return { books };
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { removeBook })(BooksList);
