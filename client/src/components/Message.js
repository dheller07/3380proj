

const Message = ({onMessageResult, myIdMessage, myPasswordMessage}) => {


    const submitMessageSearch = (event) => {
        onMessageResult();
        event.preventDefault();
    }


    return (

        <form className='add-form'>
            <div className='form-control'>
                <label>Re enter ID:</label>
                <input
                    type='number'
                    placeholder='enter ID'
                    onChange = {myIdMessage}
                />
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input
                    type='name'
                    placeholder='enter password'
                    onChange = {myPasswordMessage}
                />
            </div>

    
            <button className='btn btn-block' onClick = { submitMessageSearch} > Search  </button>
        </form>
    )

}



export default Message