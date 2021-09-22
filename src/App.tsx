import React, {useState} from 'react';
import './App.css';
import './components/List'
import './components/AddBook'
import List from './components/List';
import AddBooks from './components/AddBook';

// Setting the types for the useState hook, initilizing an array of objects with these types
export interface IState {
  books: {
    title: string,
    url?: string,
    genre: string,
    pages: number,
    author: string
  }[]
}

function App() {
    const [books, setBooks] = useState<IState['books']>([
      {
        title: 'The Witcher',
        url: "https://m.media-amazon.com/images/I/51pRo5wpR4L.jpg",
        genre: "Fantasy",
        pages: 287,
        author: "Andrez Sapkowski"
      }
    ])
  
  return (
    <div className="App">
      <h1>My Books</h1>
      <List books={books}/>
      <AddBooks books={books} setBooks={setBooks}/>
    </div>
  );
}

export default App;
