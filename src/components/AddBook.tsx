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
        <div className='mb-3'>
            <form onSubmit={handleSubmit}>
                <div className='form-floating'>
                    <input 
                        type='text' 
                        placeholder='Title' 
                        value={input.title} 
                        name='title'
                        className='form-control'
                        id='floatingTitle'
                        onChange={inputHandler}
                    />
                    <label style={{paddingLeft: '25px'}}htmlFor='floatingTitle'>Title</label>
                </div>
                <div className='form-floating'>
                    <input 
                        type='text' 
                        placeholder='Title' 
                        value={input.url} 
                        name='url'
                        className='form-control'
                        id='floatingUrl'
                        onChange={inputHandler}
                    />
                    <label style={{paddingLeft: '25px'}}htmlFor='floatingUrl'>IMAGE URL</label>
                </div>
                <div className='form-floating'>
                    <input 
                        type='text' 
                        placeholder='Genre' 
                        value={input.genre} 
                        name='genre'
                        className='form-control'
                        id='floatingGenre'
                        onChange={inputHandler}
                    />
                    <label style={{paddingLeft: '25px'}}htmlFor='floatingGenre'>Genre</label>
                </div>
                <div className='form-floating'>
                    <input 
                        type='text' 
                        placeholder='Pages' 
                        value={input.pages} 
                        name='pages'
                        className='form-control'
                        id='floatingPages'
                        onChange={inputHandler}
                    />
                    <label style={{paddingLeft: '25px'}}htmlFor='floatingPages'>Pages</label>
                </div>
                <div className='form-floating'>
                    <input 
                        type='text' 
                        placeholder='Author' 
                        value={input.author} 
                        name='author'
                        className='form-control'
                        id='floatingAuthor'
                        onChange={inputHandler}
                    />
                    <label style={{paddingLeft: '25px'}}htmlFor='floatingAuthor'>Author</label>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddBooks