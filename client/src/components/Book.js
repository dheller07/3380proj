
const Book = ({onBookResult, myTitleBook, myIsbnBook, myAuthorBook}) => {
    
    const submitBookSearch = (event) => {
        //window.location.href = "/Tasks";
        onBookResult();
        event.preventDefault();
    }



    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Title</label>
                <input
                    type='title'
                    placeholder='enter the title'
                    onChange = {myTitleBook}
                />
            </div>
            <div className='form-control'>
                <label>ISBN</label>
                <input
                    type='number'
                    placeholder='enter the isbn'
                    onChange = {myIsbnBook}
                />
            </div>
            <div className='form-control'>
                <label>Author</label>
                <input
                    type='author'
                    placeholder='enter the author'
                    onChange = {myAuthorBook}
                />
            </div>
    
        <button className='btn btn-block' onClick = { submitBookSearch} > Search  </button>
        </form>
    )

}



export default Book