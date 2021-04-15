
const Device = ({onDeviceResult, myTitleDevice, myIdDevice}) => {

    const submitDeviceSearch = (event) => {
        onDeviceResult();
        event.preventDefault();
    }
    return (

        <form className='add-form'>
            <div className='form-control'>
                <label>Device Name</label>
                <input
                    type='name'
                    placeholder='enter device name'
                    onChange = {myTitleDevice}
                    
                />
            </div>
            <div className='form-control'>
                <label>ID</label>
                <input
                    type='number'
                    placeholder='enter the ID'
                    onChange = {myIdDevice}
                />
            </div>

    
            <button className='btn btn-block' onClick = { submitDeviceSearch} > Search  </button>
        </form>
    )

}



export default Device