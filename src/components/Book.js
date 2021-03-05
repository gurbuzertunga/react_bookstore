/* eslint-disable */
import React from 'react';

export default function Book({ book }) {
  const { id, title, category } = book;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
}
