
const AudioBook = ({onAudioBookResult, myIDAudioBook}) => {

    const submitBookRemove = (event) => {
        onAudioBookResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Enter ID</label>
                <input
                    type='ID'
                    placeholder='enter the ID'
                    onChange = {myIDAudioBook}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitBookRemove} > Remove </button>
        </form>
    )

}



export default AudioBook