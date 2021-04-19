
const Book = ({onBookResult, myIDBook}) => {

    const submitBookRemove = (event) => {
        onBookResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Enter ID</label>
                <input
                    type='number'
                    placeholder='enter the ID'
                    onChange = {myIDBook}
                />
               
            </div>
            
    
            <button className='btn btn-block' onClick = { submitBookRemove} > Remove </button>
        </form>
    )

}



export default Book