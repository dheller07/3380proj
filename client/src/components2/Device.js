
const Device = ({onDeviceResult, myTypeDevice, myModelDevice, myUsernameDevice, myPasswordDevice}) => {

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
                <label>Username</label>
                <input
                    type='text'
                    placeholder='enter username'
                    onChange = {myUsernameDevice}
                />
                <label>Password</label>
                <input
                    type='text'
                    placeholder='enter password'
                    onChange = {myPasswordDevice}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitDeviceAdd} > Add </button>

        </form>
    )

}



export default Device