

const AddLibrarian = ({onShowTheLibAdd, myLibFirstAdd, myLibLastAdd, mySSNAdd, myBirthAdd, mySalaryAdd, myPhoneAdd}) => {

    const submitLibrarianAdd = (event) => {
       onShowTheLibAdd();
        event.preventDefault();
    }


    return (

        <form className='add-form'>
            <div className='form-control'>
                <label>First Name: </label>
                <input
                    type='name'
                    placeholder='enter First Name'
                    onChange = {myLibFirstAdd}
                />
            </div>
            <div className='form-control'>
                <label>Last Name: </label>
                <input
                    type='name'
                    placeholder='enter Last Name'
                    onChange = {myLibLastAdd}
                />
            </div>
            <div className='form-control'>
                <label>SSN:</label>
                <input
                    type='name'
                    placeholder='enter SSN'
                    onChange = {mySSNAdd}
                />
            </div>
            <div className='form-control'>
                <label>Birthday: </label>
                <input
                    type='name'
                    placeholder='enter birthday'
                    onChange = {myBirthAdd}
                />
            </div>
            <div className='form-control'>
                <label>Salary: </label>
                <input
                    type='name'
                    placeholder='enter salary'
                    onChange = {mySalaryAdd}
                />
            </div>
            <div className='form-control'>
                <label>Phone number: </label>
                <input
                    type='name'
                    placeholder='enter phone number'
                    onChange = {myPhoneAdd}
                />
            </div>

            

    
            <button className='btn btn-block' onClick = {submitLibrarianAdd} > Add </button>
        </form>
    )

}



export default AddLibrarian