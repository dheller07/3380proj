
const RemoveCustomer = ({onShowTheRemove, myIdRemove}) => {

    const submitCustomerRemove = (event) => {
        onShowTheRemove();
        event.preventDefault();
    }


    return (

        <form className='add-form'>
            <div className='form-control'>
                <label>Remove Customer: </label>
                <input
                    type='number'
                    placeholder='Enter Customer ID'
                    onChange = {myIdRemove}
                />
            </div>
            
            <button className='btn btn-block' onClick = { submitCustomerRemove} > Remove </button>
        </form>
    )

}



export default RemoveCustomer