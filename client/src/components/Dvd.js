

const Dvd = ({onDvdResult, myTitleDvd, myIdDvd, myDirectorDvd}) => {
 
    const submitDvdSearch = (event) => {
        onDvdResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Title</label>
                <input
                    type='title'
                    placeholder='enter the title'
                    onChange = {myTitleDvd}
                />
            </div>
            <div className='form-control'>
                <label>ID</label>
                <input
                    type='number'
                    placeholder='enter the id'
                    onChange = {myIdDvd}
                />
            </div>
            <div className='form-control'>
                <label>Director</label>
                <input
                    type='director'
                    placeholder='enter the director'
                    onChange = {myDirectorDvd}
                />
            </div>
    
            <button className='btn btn-block' onClick = { submitDvdSearch} > Search  </button>
        </form>
    )

}



export default Dvd;