
const Dvd = ({onDvdResult1, onDvdResult2, myIdDvd, myIdCustomer, myIdEmployee}) => {
 
    const submitDvdReturn = (event) => {
        onDvdResult1();
        event.preventDefault();
    }

    const submitDvdCheckout = (event) => {
        onDvdResult2();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
            <label>DVD ID</label>
                <input
                    type='number'
                    placeholder='enter the DVD ID'
                    onChange = {myIdDvd}
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
            
    
            <button className='btn btn-block' onClick = { submitDvdReturn} > Return </button>
            <button className='btn btn-block' onClick = { submitDvdCheckout} > Checkout </button>
        </form>
    )

}



export default Dvd