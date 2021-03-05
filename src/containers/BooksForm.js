import React from 'react'

export default function BooksForm() {
    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

    return (
        <form name="addBookForm">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" required />

            <label for="category">Choose a category:</label>
            <select name="category" id="category">
                <option value=""></option>
            </select>

            <button type="submit">Add Book</button>
        </form>
    )
}
