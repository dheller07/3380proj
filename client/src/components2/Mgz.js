import { useState } from 'react'

const Mgz = () => {
    const [title, theTitle] = useState('')
    const [issue, theIssue] = useState('')
    const [issueDate, theIssueDate] = useState('')
    const [topic, theTopic] = useState('')

    

    const submitMgzAdd = (event) => {
        console.log(title);
        console.log(issue);
        console.log(issueDate);
        console.log(topic);
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Title</label>
                <input
                    type='text'
                    placeholder='enter the Title'
                    onChange = {(e) => {
                        theTitle(e.target.value)
                    }}
                />
                <label>Issue</label>
                <input
                    type='ID'
                    placeholder='enter the Issue'
                    onChange = {(e) => {
                        theIssue(e.target.value)
                    }}
                />
                <label>Issue Date</label>
                <input
                    type='text'
                    placeholder='enter the Issue Date'
                    onChange = {(e) => {
                        theIssueDate(e.target.value)
                    }}
                />
                <label>Topic</label>
                <input
                    type='text'
                    placeholder='enter the Topic'
                    onChange = {(e) => {
                        theTopic(e.target.value)
                    }}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitMgzAdd} > Add </button>
        </form>
    )

}



export default Mgz