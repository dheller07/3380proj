

const Narrator = ({onNarrator, myNarratorFirst, myNarratorLast, myNarratorOrigin, myNarratorBorn, myNarratorDied}) => {

    const submitNarrator = (event) => {
       onNarrator();
        event.preventDefault();
    }


    return (

        <form className='add-form'>
            <div className='form-control'>
                <label>First Name: </label>
                <input
                    type='name'
                    placeholder='enter First Name'
                    onChange = {myNarratorFirst}
                />
            </div>
            <div className='form-control'>
                <label>Last Name: </label>
                <input
                    type='name'
                    placeholder='enter Last Name'
                    onChange = {myNarratorLast}
                />
            </div>
            <div className='form-control'>
                <label>Narrator Origin: </label>
                <input
                    type='name'
                    placeholder='enter narrator origin'
                    onChange={myNarratorOrigin}
                />
            </div>
            <div className='form-control'>
                <label>Narrator Born:</label>
                <input
                    type='name'
                    placeholder='enter narrator born date'
                    onChange = {myNarratorBorn}
                />
            </div>
            <div className='form-control'>
                <label>Narrator Died:</label>
                <input
                    type='name'
                    placeholder='enter narrator death date'
                    onChange = {myNarratorDied}
                />
            </div>
            

    
            <button className='btn btn-block' onClick = { submitNarrator} > Add </button>
        </form>
    )

}



export default Narrator