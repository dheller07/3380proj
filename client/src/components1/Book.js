
const Book = ({onBookResult1, onBookResult2, myIdBook, myIdCustomer, myIdEmployee}) => {

    const submitBookReturn = (event) => {
        onBookResult1();
        event.preventDefault();
    }

    const submitBookCheckout = (event) => {
        onBookResult2();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
            <label>Book ID</label>
                <input
                    type='number'
                    placeholder='enter the book ID'
                    onChange = {myIdBook}
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
            
    
            <button className='btn btn-block' onClick = { submitBookReturn} > Return </button>
            <button className='btn btn-block' onClick = { submitBookCheckout} > Checkout </button>
        </form>
    )

}



export default Book