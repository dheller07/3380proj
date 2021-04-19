
const AudioBook = ({onAudioBookResult, myTitleAudioBook, myIsbnAudioBook, myAuthorAudioBook}) => {

    const submitBookSearch = (event) => {
        //window.location.href = "/Tasks";
        onAudioBookResult();
        event.preventDefault();
    }


    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Title</label>
                <input
                    type='title'
                    placeholder='enter the title'
                    onChange = {myTitleAudioBook}
                />
            </div>
            <div className='form-control'>
                <label>ISBN</label>
                <input
                    type='number'
                    placeholder='enter the isbn'
                    onChange = {myIsbnAudioBook}
                />
            </div>
            <div className='form-control'>
                <label>Author</label>
                <input
                    type='author'
                    placeholder='enter the author'
                    onChange = {myAuthorAudioBook}
                />
            </div>

    
            <button className='btn btn-block' onClick = { submitBookSearch} > Search  </button>
        </form>
    )

}



export default AudioBook