import { useState } from 'react'
//import { ReactDOM, mountNode } from 'react-dom'

const Device = ({ onDevice }) => {
    const [name, searchName] = useState('')
    const [number, enterNumber] = useState('')



    const onSubmit = (e) => {
        e.preventDefault();
    

        // if (!(title||isbn)) {
        //     alert('You must enter the title or ID to search')
        //     return
        // }

        onDevice({ name, number })
    
        searchName('')
        enterNumber('')
    }

    return (

        <form className='add-form'>
            <div className='form-control'>
                <label>Title</label>
                <input
                    type='name'
                    placeholder='enter device name'
                    value={name}
                    //
                />
            </div>
            <div className='form-control'>
                <label>amount</label>
                <input
                    type='number'
                    placeholder='enter the amount you want to borrow'
                    value={number}
                    //
                />
            </div>

    
        <input type='submit' value='search for Device' className='btn btn-block' />
        </form>
    )

}



export default Device