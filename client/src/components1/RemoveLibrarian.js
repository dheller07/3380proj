
const RemoveLibrarian = ({onShowTheLibRemove, mySSNRemove}) => {

    const submitLibrarianRemove = (event) => {
        onShowTheLibRemove();
        event.preventDefault();
    }


    return (

        <form className='add-form'>
            <div className='form-control'>
                <label>Remove Librarian: </label>
                <input
                    type='number'
                    placeholder='Enter Librarian SSN'
                    onChange = {mySSNRemove}
                />
            </div>
            
            <button className='btn btn-block' onClick = { submitLibrarianRemove} > Remove </button>
        </form>
    )

}



export default RemoveLibrarian