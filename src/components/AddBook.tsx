import React from 'react'
import ".././styles/addBook.css"

const AddBooks = () => {
    return (
        <div className='add-book'>
            <form>
                <input type='text' placeholder='Title'/>
                <input type='text' placeholder='IMAGE URL'/>
                <input type='text' placeholder='Genre'/>
                <input type='number' placeholder='Pages'/>
                <input type='text' placeholder='Author'/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddBooks