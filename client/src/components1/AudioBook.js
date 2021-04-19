

const AudioBook = ({onAudioBookResult1, onAudioBookResult2, myIdAudioBook, myIdCustomer, myIdEmployee}) => {

    const submitAudioBookReturn = (event) => {
        onAudioBookResult1();
        event.preventDefault();
    }

    const submitAudioBookCheckout = (event) => {
        onAudioBookResult2();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Book ID</label>
                <input
                    type='number'
                    placeholder='enter the book ID'
                    onChange = {myIdAudioBook}
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
            
    
            <button className='btn btn-block' onClick = { submitAudioBookReturn} > Return </button>
            <button className='btn btn-block' onClick = { submitAudioBookCheckout} > Checkout </button>
        </form>
    )

}



export default AudioBook