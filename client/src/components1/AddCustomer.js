

const AddCustomer = ({onShowTheAdd, myPasswordAdd, myFirstAdd, myLastAdd, myRoleAdd}) => {

    const submitCustomerAdd = (event) => {
       onShowTheAdd();
        event.preventDefault();
    }


    return (

        <form className='add-form'>
            <div className='form-control'>
                <label>Add Password:</label>
                <input
                    type='name'
                    placeholder='enter new Password'
                    onChange = {myPasswordAdd}
                />
            </div>
            <div className='form-control'>
                <label>First Name: </label>
                <input
                    type='name'
                    placeholder='enter First Name'
                    onChange = {myFirstAdd}
                />
            </div>
            <div className='form-control'>
                <label>Last Name: </label>
                <input
                    type='name'
                    placeholder='enter Last Name'
                    onChange = {myLastAdd}
                />
            </div>
            <div className='form-control'>
                <label>Customer Role: </label>
                <input
                    type='name'
                    placeholder='enter Customer Role'
                    onChange = {myRoleAdd}
                />
            </div>
            

    
            <button className='btn btn-block' onClick = { submitCustomerAdd} > Add </button>
        </form>
    )

}



export default AddCustomer