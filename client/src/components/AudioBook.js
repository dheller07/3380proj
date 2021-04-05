import { useState } from 'react'

const AudioBook = ({ onAudioBook }) => {
    const [title, searchTitle] = useState('')
    const [isbn, searchIsbn] = useState('')
    const[author, searchAuthor] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
    

        // if (!(title||isbn)) {
        //     alert('You must enter the title or ID to search')
        //     return
        // }

        onAudioBook({ title, isbn, author })
    
        searchTitle('')
        searchIsbn('')
        searchAuthor('')
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Title</label>
                <input
                    type='title'
                    placeholder='enter the title'
                    value={title}
                    //
                />
            </div>
            <div className='form-control'>
                <label>ISBN</label>
                <input
                    type='isbn'
                    placeholder='enter the isbn'
                    value={isbn}
                    //
                />
            </div>
            <div className='form-control'>
                <label>Author</label>
                <input
                    type='author'
                    placeholder='enter the author'
                    value={author}
                    //
                />
            </div>

    
        <input type='submit' value='search for AudioBook' className='btn btn-block' />
        </form>
    )

}



export default AudioBook