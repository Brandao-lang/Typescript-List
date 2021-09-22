import React from "react";
import ".././styles/list.css"

// Have to define what the prop will look like that this componenet will be expecting
interface IProps {
    books: {
        title: string,
        url: string,
        genre?: string,
        pages: number,
        author: string
    }[]
}

// Declaring that 'List' is a react functional component with the types of IProps
const List: React.FC<IProps> = ({books}) => {

    // This function will return an array of JSX elements
    const displayList = (): JSX.Element[] => {
        return books.map((book) => {
            return (
            <li className='list-item'>
                <img className='book-cover' alt="cover-art" src={book.url}/>
                <h3>{book.title}</h3>
                <h3>{book.genre}</h3>
                <h3>{book.pages}</h3>
                <h3>{book.author}</h3>
            </li>
        )
    })
}
    
    return (
        <ul>
            {displayList()}
        </ul>
    )
}

export default List