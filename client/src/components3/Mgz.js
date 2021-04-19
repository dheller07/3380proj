
const Mgz = ({onMgzResult, myIDMgz}) => {

    const submitMgzRemove = (event) => {
        onMgzResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Enter ID</label>
                <input
                    type='number'
                    placeholder='enter the ID'
                    onChange = {myIDMgz}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitMgzRemove} > Remove </button>
        </form>
    )

}



export default Mgz