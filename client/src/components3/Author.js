
const Author = ({onAuthorResult, myIDAuthor}) => {

    const submitAuthorRemove = (event) => {
        onAuthorResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Enter ID</label>
                <input
                    type='number'
                    placeholder='enter the ID'
                    onChange = {myIDAuthor}
                />
               
            </div>
            
    
            <button className='btn btn-block' onClick = { submitAuthorRemove} > Remove </button>
        </form>
    )

}



export default Author