
const Dvd = ({onDvdResult, myIDDvd}) => {

    const submitDvdRemove = (event) => {
        onDvdResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Enter ID</label>
                <input
                    type='number'
                    placeholder='enter the ID'
                    onChange = {myIDDvd}
                />
                
            </div>
            
    
            <button className='btn btn-block' onClick = { submitDvdRemove} > Remove </button>

        </form>
    )

}



export default Dvd