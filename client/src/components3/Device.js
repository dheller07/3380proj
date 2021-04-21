
const Device = ({onDeviceResult, myIDDevice}) => {

    const submitDeviceRemove = (event) => {
        onDeviceResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Enter the ID</label>
                <input
                    type='number'
                    placeholder='enter the ID'
                    onChange = {myIDDevice}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitDeviceRemove} > Remove </button>

        </form>
    )

}



export default Device