
const Mgz = ({onMgzResult, myTitleMgz, myIssueMgz, myDateMgz, myTopicMgz}) => {

    const submitMgzAdd = (event) => {
        onMgzResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Title</label>
                <input
                    type='text'
                    placeholder='enter the Title'
                    onChange = {myTitleMgz}
                />
                <label>Issue</label>
                <input
                    type='number'
                    placeholder='enter the Issue'
                    onChange = {myIssueMgz}
                />
                <label>Issue Date</label>
                <input
                    type='text'
                    placeholder='enter the Issue Date'
                    onChange = {myDateMgz}
                />
                <label>Topic</label>
                <input
                    type='text'
                    placeholder='enter the Topic'
                    onChange = {myTopicMgz}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitMgzAdd} > Add </button>
        </form>
    )

}



export default Mgz