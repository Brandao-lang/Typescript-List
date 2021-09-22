import React, { useState } from 'react'
import ".././styles/addBook.css"
import { IState as Props} from '../App'

interface IProps {
    books: Props['books']
    setBooks: React.Dispatch<React.SetStateAction<Props['books']>>
}

const AddBooks: React.FC<IProps> = ({books, setBooks}) => {
    const [input, setInput] = useState({
        title: '',
        url: '',
        genre: '',
        pages: 0,
        author: ''
    })

    // Set the type for the event passed into this function. This function updates the values based on the name attribute tied to each input field
    function inputHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: any): void {
        e.preventDefault()
        if (
            !input.title ||
            !input.genre ||
            !input.pages ||
            !input.author
            ) {
              return
            }
        setBooks([
            ...books, 
            {
                title: input.title,
                url: input.url,
                genre: input.genre,
                pages: input.pages,
                author: input.author
            }
        ])

        setInput({
            title: '',
            url: '',
            genre: '',
            pages: 0,
            author: ''
        })
    }

    return (
        <div className='add-book'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Title' 
                    value={input.title} 
                    name='title'
                    onChange={inputHandler}
                />
                <input 
                    type='text' 
                    placeholder='IMAGE URL' 
                    value={input.url} 
                    name='url'
                    onChange={inputHandler}
                />
                <input 
                    type='text' 
                    placeholder='Genre' 
                    value={input.genre} 
                    name='genre'
                    onChange={inputHandler}
                />
                <input 
                    type='number' 
                    placeholder='Pages' 
                    value={input.pages} 
                    name='pages'
                    onChange={inputHandler}
                />
                <input 
                    type='text' 
                    placeholder='Author' 
                    value={input.author} 
                    name='author'
                    onChange={inputHandler}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddBooks