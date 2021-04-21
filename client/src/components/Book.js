import BookSearch from "../searchResult/Books"

import { BrowserRouter as Link, Route, Switch } from "react-router-dom"
import Button from "./Button"

<Route path="/BookSearch" component={BookSearch} />

const Book = ({onBookResult, myTitleBook, myIsbnBook, myAuthorBook}) => {
    
    const submitBookSearch = () => {

        window.location.href = "/BookSearch";
        // onBookResult();
        // event.preventDefault();
    }



    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Title</label>
                <input
                    type='title'
                    placeholder='enter the title'
                    onChange = {myTitleBook}
                />
            </div>
            <div className='form-control'>
                <label>ISBN</label>
                <input
                    type='number'
                    placeholder='enter the isbn'
                    onChange = {myIsbnBook}
                />
            </div>
            <div className='form-control'>
                <label>Author</label>
                <input
                    type='author'
                    placeholder='enter the author'
                    onChange = {myAuthorBook}
                />
            </div>
        
            {/* <Button
                // className='btn btn-block'
                text={'Search'}
                onClick={submitBookSearch}
            /> */}
        
         {/* <button className='btn btn-block' onClick = { submitBookSearch} > Search  </button> */}
        <Link to="/BookSearch"><button className='btn btn-block' > Search  </button></Link>
        </form>
    )

}



export default Book