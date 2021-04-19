import { useState } from 'react'

const Device = () => {
    const [deviceType, theDeviceType] = useState('')
    const [model, theModel] = useState('')

    const submitDeviceAdd = (event) => {
        console.log(deviceType);
        console.log(model);
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Device Type</label>
                <input
                    type='text'
                    placeholder='enter the Device Type'
                    onChange = {(e) => {
                        theDeviceType(e.target.value)
                    }}
                />
                <label>Model</label>
                <input
                    type='text'
                    placeholder='enter the Model'
                    onChange = {(e) => {
                        theModel(e.target.value)
                    }}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitDeviceAdd} > Add </button>

        </form>
    )

}



export default Device