
const Book = ({onBookResult, myTitleBook, myIsbnBook, myAuthorBook, myPublisherBook, myYearBook, myEditionBook, mySeriesBook, mySeriesPositionBook, myGenreBook, myUsernameBook, myPasswordBook}) => {

    const submitBookAdd = (event) => {
        onBookResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>ISBN</label>
                <input
                    type='number'
                    placeholder='enter the ISBN'
                    onChange = {myIsbnBook}
                />
                <label>Title</label>
                <input
                    type='text'
                    placeholder='enter the Title'
                    onChange = {myTitleBook}
                />
                <label>AuthorID</label>
                <input
                    type='number'
                    placeholder='enter the AuthorID'
                    onChange = {myAuthorBook}
                />
                <label>PublisherID</label>
                <input
                    type='number'
                    placeholder='enter the PublisherID'
                    onChange = {myPublisherBook}
                />
                <label>Publication Year</label>
                <input
                    type='number'
                    placeholder='enter the Publication Year'
                    onChange = {myYearBook}
                />
                <label>Edition</label>
                <input
                    type='number'
                    placeholder='enter the Edition'
                    onChange = {myEditionBook}
                />
                <label>Series</label>
                <input
                    type='number'
                    placeholder='enter the Series'
                    onChange = {mySeriesBook}
                />
                <label>Series Position</label>
                <input
                    type='number'
                    placeholder='enter the Series Position'
                    onChange = {mySeriesPositionBook}
                />
                <label>Genre</label>
                <input
                    type='text'
                    placeholder='enter the Genre'
                    onChange = {myGenreBook}
                />
                <label>Username</label>
                <input
                    type='text'
                    placeholder='enter username'
                    onChange = {myUsernameBook}
                />
                <label>Password</label>
                <input
                    type='text'
                    placeholder='enter password'
                    onChange = {myPasswordBook}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitBookAdd} > Add </button>
        </form>
    )

}



export default Book