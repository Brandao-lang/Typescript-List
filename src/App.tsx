import React, {useState} from 'react';
import './App.css';
import './components/List'
import './components/AddBook'
import List from './components/List';
import AddBooks from './components/AddBook';


// Setting the types for the useState hook, initializing an array of objects with these types
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
    const [books, setBooks] = useState<IState['books']>([])
  
  return (
    <div className="App">
      <h1>My Books</h1>
      <List books={books} setBooks={setBooks} editBook={{
        title: '',
        url: undefined,
        genre: '',
        pages: 0,
        author: ''
      }} selected={0} />
      <AddBooks books={books} setBooks={setBooks}/>
    </div>
  );
}

export default App;
