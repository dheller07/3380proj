

const Device = ({onDeviceResult1, onDeviceResult2, myIdDevice, myIdCustomer, myIdEmployee}) => {

    const submitDeviceReturn = (event) => {
        onDeviceResult1();
        event.preventDefault();
    }

    const submitDeviceCheckout = (event) => {
        onDeviceResult2();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
            <label>Device ID</label>
                <input
                    type='number'
                    placeholder='enter the device ID'
                    onChange = {myIdDevice}
                />
                <label>Customer ID</label>
                <input
                    type='number'
                    placeholder='enter the customer ID'
                    onChange = {myIdCustomer}
                />

                <label>Employee ID</label>
                <input
                    type='number'
                    placeholder='enter the Employee ID'
                    onChange = {myIdEmployee}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitDeviceReturn} > Return </button>
            <button className='btn btn-block' onClick = { submitDeviceCheckout} > Checkout </button>
        </form>
    )

}



export default Device