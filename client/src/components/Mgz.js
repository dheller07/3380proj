
const Mgz = ({onMgzResult, myTitleMgz, myIdMgz}) => {

    const submitMgzSearch = (event) => {
        onMgzResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Title</label>
                <input
                    type='title'
                    placeholder='enter the title'
                    onChange = {myTitleMgz}
                />
            </div>
            <div className='form-control'>
                <label>ID</label>
                <input
                    type='number'
                    placeholder='enter the id'
                    onChange = {myIdMgz}
                />
            </div>
    
            <button className='btn btn-block' onClick = { submitMgzSearch} > Search  </button>
        </form>
    )

}



export default Mgz