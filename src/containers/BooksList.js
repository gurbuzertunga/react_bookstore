import React from 'react';
import { connect } from 'react-redux';

const BooksList = () => (
  <table>
    <th>
      <td>Book ID</td>
      <td>Title</td>
      <td>Category</td>
    </th>
  </table>
);

const mapStateToProps = state => {
  const books = { state };
  return { books };
};

export default connect(mapStateToProps)(BookList);
