
const Device = ({onDeviceResult, myTypeDevice, myModelDevice}) => {

    const submitDeviceAdd = (event) => {
        onDeviceResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Device Type</label>
                <input
                    type='text'
                    placeholder='enter the Device Type'
                    onChange = {myTypeDevice}
                />
                <label>Model</label>
                <input
                    type='text'
                    placeholder='enter the Model'
                    onChange = {myModelDevice}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitDeviceAdd} > Add </button>

        </form>
    )

}



export default Device