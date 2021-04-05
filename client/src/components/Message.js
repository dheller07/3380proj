import { useState } from 'react'
//import { ReactDOM, mountNode } from 'react-dom'

const Message = ({ onMessage }) => {
    const [ID, searchID] = useState('')
    const [Password, enterPassword] = useState('')



    const onSubmit = (e) => {
        e.preventDefault();
    

        // if (!(title||isbn)) {
        //     alert('You must enter the title or ID to search')
        //     return
        // }

        onMessage({ ID, Password })
    
        searchID('')
        enterPassword('')
    }

    return (

        <form className='add-form'>
            <div className='form-control'>
                <label>Re enter ID:</label>
                <input
                    type='number'
                    placeholder='enter ID'
                    value={ID}
                    //
                />
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input
                    type='name'
                    placeholder='enter password'
                    value={Password}
                    //
                />
            </div>

    
        <input type='submit' value='search for Messages' className='btn btn-block' />
        </form>
    )

}



export default Message