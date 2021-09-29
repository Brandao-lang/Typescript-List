import React from 'react'

interface EditProps {
    selected: number,
    showEdit: boolean,
    editBook: {
        title: string,
        url?: string,
        genre: string,
        pages: number,
        author: string
    },
    books: {
        title: string,
        url?: string,
        genre: string,
        pages: number,
        author: string,
    }[],
    setEditBook: React.Dispatch<React.SetStateAction<EditProps['editBook']>>,
    setBooks: React.Dispatch<React.SetStateAction<EditProps['books']>>,
}

const EditBooks: React.FC<EditProps> = ({showEdit, editBook, setEditBook, books, setBooks, selected}) => {

    function inputHandler(e:React.ChangeEvent<HTMLInputElement>): void {
        setEditBook({
            ...editBook,
            [e.target.name]: e.target.value
        })
    }
    
    function handleSubmit(e: any): void {
        e.preventDefault()
        const editedBook = [...books]
        editedBook.splice(selected, 1, editBook)
        setBooks(editedBook)
        

    }


    return (
        <div className={showEdit ? 'show-edit' : 'hide-edit'}>
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Title' 
                value={editBook.title}
                name='title'
                onChange={inputHandler}
            />
            <input 
                type='text' 
                placeholder='IMAGE URL' 
                value={editBook.url}
                name='url'
                onChange={inputHandler}
            />
            <input 
                type='text' 
                placeholder='Genre' 
                value={editBook.genre} 
                name='genre'
                onChange={inputHandler}
            />
            <input 
                type='number' 
                placeholder='Pages' 
                value= {editBook.pages} 
                name='pages'
                onChange={inputHandler}
            />
            <input 
                type='text' 
                placeholder='Author' 
                value={editBook.author}
                name='author'
                onChange={inputHandler}
            />
            <button>Submit</button>
        </form>
    </div>
    )
}

export default EditBooks