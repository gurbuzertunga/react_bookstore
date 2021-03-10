/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';

const BooksList = ({ books, removeBook, changeFilter }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = filter => {
    changeFilter(filter);
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
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { removeBook, changeFilter })(BooksList);
