import { useState } from 'react'

const Mgz = ({ onMgz }) => {
    const [title, searchTitle] = useState('')
    const [id, searchId] = useState('')
    const[director, searchDirector] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
    

        // if (!(title||isbn)) {
        //     alert('You must enter the title or ID to search')
        //     return
        // }

        onMgz({ title, id, director })
    
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
    
        <input type='submit' value='search for magazine' className='btn btn-block' />
        </form>
    )

}



export default Mgz