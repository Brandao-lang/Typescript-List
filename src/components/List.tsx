import React, { useState } from "react";
import ".././styles/list.css"
import EditBook from "./EditBook";

// Have to define what the prop will look like that this componenet will be expecting
export interface IProps {
    books: {
        title: string,
        url?: string,
        genre: string,
        pages: number,
        author: string,
    }[],
    editBook: {
        title: string,
        url?: string,
        genre: string,
        pages: number,
        author: string
    }
    setBooks: React.Dispatch<React.SetStateAction<IProps['books']>>,
    selected: number

}

// Declaring that 'List' is a react functional component with the types of IProps
const List: React.FC<IProps> = ({books, setBooks}) => {
    const [selected, setSelected] = useState<number>(0)
    const [showEdit, setShowEdit] = useState<boolean>(false)
    const [editBook, setEditBook] = useState<IProps['editBook']>({
        title: '',
        url: '',
        genre: '',
        pages: 0,
        author: ''
    })

    function handleDelete(index: number):void {
        const newArr = [...books]
        newArr.splice(index, 1)
        setBooks(newArr)
    }

    function handleEdit(index: number):void {
        setSelected(index)
        setShowEdit(!showEdit)
        setEditBook({
            title: books[index].title,
            url: books[index].url!,
            genre: books[index].genre,
            pages: books[index].pages,
            author: books[index].author
        })
    }

    // This function will return an array of JSX elements
    const displayList = (): JSX.Element[] => {
        return books.map((book, index) => {
            return (
            <li key={index} className='list-item'>
                <img className='book-cover' alt="cover-art" src={book.url}/>
                <h3 style={{marginTop: '5%'}}>{book.title}</h3>
                <h3 style={{marginTop: '5%'}}>{book.genre}</h3>
                <h3 style={{marginTop: '5%'}}>{book.pages}</h3>
                <h3 style={{marginTop: '5%'}}>{book.author}</h3>
                <button onClick={() => handleDelete(index)} style={{height: '20%', marginTop: '5%'}}>Delete</button>
                <button onClick={() => handleEdit(index)} style={{height: '20%', marginTop: '5%'}}>Edit</button>
            </li>
        )
    })
}
    return (
     <div>
        <ul>
            {displayList()}
        </ul>
        <EditBook showEdit={showEdit} editBook={editBook} setEditBook={setEditBook} books={books} setBooks={setBooks} selected={selected}/>
      </div>
    )
}

export default List