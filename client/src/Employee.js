import React, { useState} from "react";
import './App.css';

function Employee() {

  const[BookSearch, setBookSearch] = useState('')
  const[AudioBookSearch, setAudioBookSearch] = useState('')
  const[GenreSearch, setGenreSearch] = useState('')
  const[AuthorSearch, setAuthorSearch] = useState('')
  const[DeviceSearch, setDeviceSearch] = useState('')
  const[bookReturn, setBookReturn] = useState('')
  const[audioBookReturn, setAudioBookReturn] = useState('')
  const[magazineReturn, setMagazineReturn] = useState('')
  const[DVDReturn, setDVDReturn] = useState('')
  const[deviceReturn, setDeviceReturn] = useState('')
  const[UserID, setUserID] = useState()
  const[EmployeeID, setEmployeeID] = useState()
  const[BookCheckOut, setBookCheckOut] = useState('')
  const[AudioBookCheckOut, setAudioBookCheckOut] = useState('')
  const[MagazineCheckOut, setMagazineCheckOut] = useState('')
  const[DVDCheckOut, setDVDCheckout] = useState('')
  const[DeviceCheckOut, setDeviceCheckout] = useState('')

  

  const submitSearch = () => {
    console.log("Book Searching: " + BookSearch); // search book in db and display
  } 

  const submitAudioSearch = () => {
    console.log("Audiobook Searching: "+AudioBookSearch); // search book in db and display
  } 

  const submitGenreSearch = () => { //search books and audiobooks by genre in db and display
    console.log("Book by Genre: " + GenreSearch);
  }

  const submitAuthorSearch = () => { //search books and audiobooks by author in db and display
    console.log("Book by author: " + AuthorSearch);
  }

  const submitDeviceSearch = () => { //search DVD in db and display
    console.log("Device Searching: " + DeviceSearch);
  }

  const submitBookReturn = () => { //return book in db
    console.log("Returning Book with ID: " + bookReturn);
  }

  const submitAudioBookReturn = () => { //return audiobook in db
    console.log("Returning AudioBook with ID: " + audioBookReturn);
  }

  const submitMagazineReturn = () => { //return magazine in db
    console.log("Returning Magazine with ID: " + magazineReturn);
  }

  const submitDVDReturn = () => { //return DVD in db
    console.log("Returning DVD with ID: " + DVDReturn);
  }

  const submitDeviceReturn = () => { //return device in db
    console.log("Returning Device with ID: " + deviceReturn);
  }

  const submitBookCheckOut = () => { //checkout book in db
    console.log("UserID: " + UserID);
    console.log("EmployeeID: " + EmployeeID);
    console.log("BookCheckOut: " + BookCheckOut);
  }

  const submitAudioBookCheckOut = () => { //checkout audiobook in db
    console.log("UserID: " + UserID);
    console.log("EmployeeID: " + EmployeeID);
    console.log("AudioBookCheckOut: " + AudioBookCheckOut);
  }

  const submitMagazineCheckOut = () => { //checkout magazine in db
    console.log("UserID: " + UserID);
    console.log("EmployeeID: " + EmployeeID);
    console.log("MagazineCheckOut: " + MagazineCheckOut);
  }

  const submitDVDCheckout = () => { //checkout DVD in db
    console.log("UserID: " + UserID);
    console.log("EmployeeID: " + EmployeeID);
    console.log("MagazineCheckOut: " + DVDCheckOut);
  }

  const submitDeviceCheckout = () => { //checkout device in db
    console.log("UserID: " + UserID);
    console.log("EmployeeID: " + EmployeeID);
    console.log("MagazineCheckOut: " + DeviceCheckOut);
  }


  return (
    <div className = "App"><h1>Employee</h1>
      <div className = "container">
        <div className = "form">
          <label>Search for Book: </label>
          <input type = "text" name = "BookSearch" onChange={(e) => {
            setBookSearch(e.target.value)
          }}/>
          <button onClick={submitSearch}>Search</button>

          <label>Search for AudioBook: </label>
          <input type = "text" name = "AudioBookSearch" onChange={(e) => {
            setAudioBookSearch(e.target.value)
          }}/>
          <button onClick={submitAudioSearch}>Search</button>

          <label>Search by Genre: </label>
          <input type = "text" name = "genreSearch" onChange={(e) => {
            setGenreSearch(e.target.value)
          }}/>
          <button onClick={submitGenreSearch}>Search</button>

          <label>Search by Author: </label>
          <input type = "text" name = "authorSearch" onChange={(e) => {
            setAuthorSearch(e.target.value)
          }}/>
          <button onClick={submitAuthorSearch}>Search</button>

          <label>Search for Device: </label>
          <input type = "text" name = "deviceSearch" onChange={(e) => {
            setDeviceSearch(e.target.value)
          }}/>
          <button onClick={submitDeviceSearch}>Search</button>
        </div>
        <div className = "form">
          <label>RETURN</label>
          <label>Book, AudioBook, or Magazine</label>
          <label>Book ID only: </label>
          <input type = "text" name = "returnedBook" onChange = {(e) => {
            setBookReturn(e.target.value)
          }}/>
          <button onClick={submitBookReturn}>Return</button>
          <label>AudioBook ID only: </label>
          <input type = "text" name = "returnedAudioBook" onChange = {(e) => {
            setAudioBookReturn(e.target.value)
          }}/>
          <button onClick={submitAudioBookReturn}>Return</button>
          <label>Magazine ID only: </label>
          <input type = "text" name = "returnedMagazine" onChange = {(e) => {
            setMagazineReturn(e.target.value)
          }}/>
          <button onClick={submitMagazineReturn}>Return</button>
          <label>DVD ID only: </label>
          <input type = "text" name = "returnedDVD" onChange = {(e) => {
            setDVDReturn(e.target.value)
          }}/>
          <button onClick={submitDVDReturn}>Return</button>
          <label>Device ID only: </label>
          <input type = "text" name = "deviceMagazine" onChange = {(e) => {
            setDeviceReturn(e.target.value)
          }}/>
          <button onClick={submitDeviceReturn}>Return</button>
        </div>
        <div className = "form">
          <label>UserID: </label>
          <input type = "text" name = "UserID" onChange={(e) => {
            setUserID(e.target.value)
          }}/>
          <label>EmployeeID: </label>
          <input type = "text" name = "EmployeeID" onChange={(e) => {
            setEmployeeID(e.target.value)
          }}/>
          <label>Check out Book (ID): </label>
          <input type = "text" name = "BookCheckOut" onChange={(e) => {
            setBookCheckOut(e.target.value)
          }}/>
          <button onClick = {submitBookCheckOut}>Checkout</button>

          <label>Check out AudioBook (ID): </label>
          <input type = "text" name = "AudioBookCheckOut"onChange={(e) => {
            setAudioBookCheckOut(e.target.value)
          }}/>
          <button onClick = {submitAudioBookCheckOut}>Checkout</button>

          <label>Check out Magazine (ID): </label>
          <input type = "text" name = "magazineCheckOut"onChange={(e) => {
            setMagazineCheckOut(e.target.value)
          }}/>
          <button onClick = {submitMagazineCheckOut}>Checkout</button>

          <label>Check out DVD (ID): </label>
          <input type = "text" name = "dvdCheckOut"onChange={(e) => {
            setDVDCheckout(e.target.value)
          }}/>
          <button onClick = {submitDVDCheckout}>Checkout</button>

          <label>Check out Device (ID): </label>
          <input type = "text" name = "deviceCheckOut"onChange={(e) => {
            setDeviceCheckout(e.target.value)
          }}/>
          <button onClick = {submitDeviceCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Employee;