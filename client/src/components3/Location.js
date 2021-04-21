
const Location = ({onLocationResult, myIDLocation}) => {

    const submitLocationRemove = (event) => {
        onLocationResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Enter ID</label>
                <input
                    type='number'
                    placeholder='enter the ID'
                    onChange = {myIDLocation}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitLocationRemove} > Remove </button>
        </form>
    )

}



export default Location