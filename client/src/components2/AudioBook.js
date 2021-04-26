
const AudioBook = ({onAudioBookResult, myTitleAudioBook, myIsbnAudioBook, myAuthorAudioBook, myNarratorAudioBook, myPublisherAudioBook, myYearAudioBook, myEditionAudioBook, mySeriesAudioBook, mySeriesPositionAudioBook, myGenreAudioBook}, myUsernameAudioBook, myPasswordAudioBook) => {

    const submitBookAdd = (event) => {
        onAudioBookResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>ISBN</label>
                <input
                    type='number'
                    placeholder='enter the ISBN'
                    onChange = {myIsbnAudioBook}
                />
                <label>Title</label>
                <input
                    type='text'
                    placeholder='enter the Title'
                    onChange = {myTitleAudioBook}
                />
                <label>AuthorID</label>
                <input
                    type='number'
                    placeholder='enter the AuthorID'
                    onChange = {myAuthorAudioBook}
                />
                <label>NarratorID</label>
                <input
                    type='number'
                    placeholder='enter the NarratorID'
                    onChange = {myNarratorAudioBook}
                />
                <label>PublisherID</label>
                <input
                    type='number'
                    placeholder='enter the PublisherID'
                    onChange = {myPublisherAudioBook}
                />
                <label>Publication Year</label>
                <input
                    type='number'
                    placeholder='enter the Publication Year'
                    onChange = {myYearAudioBook}
                />
                <label>Edition</label>
                <input
                    type='number'
                    placeholder='enter the Edition'
                    onChange = {myEditionAudioBook}
                />
                <label>Series</label>
                <input
                    type='number'
                    placeholder='enter the Series'
                    onChange = {mySeriesAudioBook}
                />
                <label>Series Position</label>
                <input
                    type='number'
                    placeholder='enter the Series Position'
                    onChange = {mySeriesPositionAudioBook}
                />
                <label>Genre</label>
                <input
                    type='text'
                    placeholder='enter the Genre'
                    onChange = {myGenreAudioBook}
                />
                <label>Username</label>
                <input
                    type='text'
                    placeholder='enter username'
                    onChange = {myUsernameAudioBook}
                />
                <label>Password</label>
                <input
                    type='password'
                    placeholder='enter password'
                    onChange = {myPasswordAudioBook}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitBookAdd} > Add </button>
        </form>
    )

}



export default AudioBook