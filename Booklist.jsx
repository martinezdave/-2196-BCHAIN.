import React, { useState } from 'react';

function BookList() {
  const [book, setBook] = useState('');
  const [bookList, setBookList] = useState([]);

  const handleBookInput = event => {
    setBook(event.target.value);
  };

  const addBook = () => {
    setBookList([...bookList, book]);
    setBook('');
  };

  return (
    <div>
      <input type="text" value={book} onChange={handleBookInput} />
      <button onClick={addBook}>Add Book</button>
      <ul>
        {bookList.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
