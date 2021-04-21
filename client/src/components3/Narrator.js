
const Narrator = ({onNarratorResult, myIDNarrator}) => {

    const submitNarratorRemove = (event) => {
        onNarratorResult();
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Enter ID</label>
                <input
                    type='number'
                    placeholder='enter the ID'
                    onChange = {myIDNarrator}
                />
               
            </div>
            
    
            <button className='btn btn-block' onClick = { submitNarratorRemove} > Remove </button>
        </form>
    )

}



export default Narrator