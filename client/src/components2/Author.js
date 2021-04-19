

const Author = ({onAuthor, myAuthorFirst, myAuthorLast, myAuthorOrigin, myAuthorBorn, myAuthorDied}) => {

    const submitAuthor = (event) => {
       onAuthor();
        event.preventDefault();
    }


    return (

        <form className='add-form'>
            <div className='form-control'>
                <label>First Name: </label>
                <input
                    type='name'
                    placeholder='enter First Name'
                    onChange = {myAuthorFirst}
                />
            </div>
            <div className='form-control'>
                <label>Last Name: </label>
                <input
                    type='name'
                    placeholder='enter Last Name'
                    onChange = {myAuthorLast}
                />
            </div>
            <div className='form-control'>
                <label>Author Origin: </label>
                <input
                    type='name'
                    placeholder='enter Author Origin'
                    onChange={myAuthorOrigin}
                />
            </div>
            <div className='form-control'>
                <label>Author Born:</label>
                <input
                    type='name'
                    placeholder='enter author born date'
                    onChange = {myAuthorBorn}
                />
            </div>
            <div className='form-control'>
                <label>Author Died:</label>
                <input
                    type='name'
                    placeholder='enter author death date'
                    onChange = {myAuthorDied}
                />
            </div>
            

    
            <button className='btn btn-block' onClick = { submitAuthor} > Add </button>
        </form>
    )

}



export default Author