import React, { useState} from "react";
import './App.css';

function Customer() {

  const[BookSearch, setBookSearch] = useState('')
  const[AudioBookSearch, setAudioBookSearch] = useState('')
  const[GenreSearch, setGenreSearch] = useState('')
  const[AuthorSearch, setAuthorSearch] = useState('')
  const[magazineSearch, setMagazineSearch] = useState('')
  

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

  const submitMagazineSearch = () => { //search magazine in db and display
    console.log("Magazine Searching: " + magazineSearch);
  }


  return (
    <div><h1>Customer</h1>
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

          <label>Search Magazine: </label>
          <input type = "text" name = "magazineSearch" onChange={(e) => {
            setMagazineSearch(e.target.value)
          }}/>
          <button onClick={submitMagazineSearch}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Customer;