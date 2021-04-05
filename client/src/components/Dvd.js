import { useState } from 'react'

const Dvd = ({ onDvd }) => {
    const [title, searchTitle] = useState('')
    const [id, searchId] = useState('')
    const[director, searchDirector] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
    

        // if (!(title||isbn)) {
        //     alert('You must enter the title or ID to search')
        //     return
        // }

        onDvd({ title, id, director })
    
        searchTitle('')
        searchId('')
        searchDirector('')
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
                <label>ID</label>
                <input
                    type='id'
                    placeholder='enter the id'
                    value={id}
                    //
                />
            </div>
            <div className='form-control'>
                <label>Director</label>
                <input
                    type='director'
                    placeholder='enter the director'
                    value={director}
                    //
                />
            </div>
    
        <input type='submit' value='search for DVD' className='btn btn-block' />
        </form>
    )

}



export default Dvd;