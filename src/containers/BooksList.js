/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      {books && books.length
      ? books.map((book) => {
          return <Book key={book} book={book} />;
        })
      : 'No Book Found!'
      }
    </table>
  );
}

const mapStateToProps = state => {
  const { books } = state;
  return books;
};

export default connect(mapStateToProps)(BooksList);
