
const Mgz = ({onMgzResult1, onMgzResult2, myIdMgz, myIdCustomer, myIdEmployee}) => {
    const submitMgzReturn = (event) => {
        onMgzResult1();
        event.preventDefault();
    }

    const submitMgzCheckout = (event) => {
        onMgzResult2();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Magazine ID</label>
                <input
                    type='number'
                    placeholder='enter the Magazine ID'
                    onChange = {myIdMgz}
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
            
    
            <button className='btn btn-block' onClick = { submitMgzReturn} > Return </button>
            <button className='btn btn-block' onClick = { submitMgzCheckout} > Checkout </button>
        </form>
    )

}



export default Mgz