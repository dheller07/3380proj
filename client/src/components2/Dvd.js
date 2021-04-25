
const Dvd = ({onDvdResult, myTitleDvd, myDateDvd, myDirectorDvd, myStudioDvd, myUsernameDvd, myPasswordDvd}) => {

    const submitDvdAdd = (event) => {
        onDvdResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Title</label>
                <input
                    type='text'
                    placeholder='enter the Title'
                    onChange = {myTitleDvd}
                />
                <label>Release Date</label>
                <input
                    type='text'
                    placeholder='enter the Release Date'
                    onChange = {myDateDvd}
                />
                <label>Director</label>
                <input
                    type='text'
                    placeholder='enter the Director'
                    onChange = {myDirectorDvd}
                />
                <label>Studio</label>
                <input
                    type='text'
                    placeholder='enter the Studio'
                    onChange = {myStudioDvd}
                />
                <label>Username</label>
                <input
                    type='text'
                    placeholder='enter username'
                    onChange = {myUsernameDvd}
                />
                <label>Password</label>
                <input
                    type='password'
                    placeholder='enter password'
                    onChange = {myPasswordDvd}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitDvdAdd} > Add </button>

        </form>
    )

}



export default Dvd