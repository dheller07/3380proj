

const Location = ({onLocation, myLocationName, myLocationAddress, myLocationPhone}) => {

    const submitLocation = (event) => {
       onLocation();
        event.preventDefault();
    }


    return (

        <form className='add-form'>
            <div className='form-control'>
                <label>Location Name: </label>
                <input
                    type='name'
                    placeholder='enter location name'
                    onChange = {myLocationName}
                />
            </div>
            <div className='form-control'>
                <label>Address: </label>
                <input
                    type='name'
                    placeholder='enter address'
                    onChange={myLocationAddress}
                />
            </div>
            <div className='form-control'>
                <label>Phone Number: </label>
                <input
                    type='name'
                    placeholder='enter phone number'
                    onChange={myLocationPhone}
                />
            </div>
            
            

    
            <button className='btn btn-block' onClick={submitLocation} > Add </button>
        </form>
    )

}



export default Location