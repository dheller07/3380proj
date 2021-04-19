import { useState } from 'react'

const Dvd = () => {
    const [title, theTitle] = useState('')
    const [releaseDate, theReleaseDate] = useState('')
    const [director, theDirector] = useState('')
    const [studio, theStudio] = useState('')
    

    const submitDvdAdd = (event) => {
        console.log(title);
        console.log(releaseDate);
        console.log(director);
        console.log(studio);
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Title</label>
                <input
                    type='text'
                    placeholder='enter the Title'
                    onChange = {(e) => {
                        theTitle(e.target.value)
                    }}
                />
                <label>Release Date</label>
                <input
                    type='text'
                    placeholder='enter the Release Date'
                    onChange = {(e) => {
                        theReleaseDate(e.target.value)
                    }}
                />
                <label>Director</label>
                <input
                    type='text'
                    placeholder='enter the Director'
                    onChange = {(e) => {
                        theDirector(e.target.value)
                    }}
                />
                <label>Studio</label>
                <input
                    type='text'
                    placeholder='enter the Studio'
                    onChange = {(e) => {
                        theStudio(e.target.value)
                    }}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitDvdAdd} > Add </button>

        </form>
    )

}



export default Dvd