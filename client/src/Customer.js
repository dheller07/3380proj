import { useState } from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header.js'

import './index.css'

import Book from './components/Book.js'
import AudioBook from './components/AudioBook.js'
import Dvd from './components/Dvd.js'
import Mgz from './components/Mgz.js'
import Device from './components/Device.js'
import ChoiceBar from './components/ChoiceBar.js'
import Message from './components/Message.js'


function Customer() {

  //BOOK PART -------------------------------------
  const [showSearchBook, setShowBook] = useState(true)
  
  const[showBookResult, setShowBookResult] = useState(false)

  const[titleBook, setTitleBook] =useState('')
  const[isbnBook, setIsbnBook] = useState('')
  const[authorBook, setAuthorBook] = useState('')

  const theSearchBook = () => {
   if(showBookResult === true) {
     return (
        <div> Searching for Book: {titleBook} {isbnBook} {authorBook}</div>
     );
   }
  }
  
  //AUDIOBOOK PART -------------------------------------
  const [showSearchAudioBook, setShowAudioBook] = useState(false)

  const[showAudioBookResult, setShowAudioBookResult] = useState(false)

  const[titleAudioBook, setTitleAudioBook] =useState('')
  const[isbnAudioBook, setIsbnAudioBook] = useState('')
  const[authorAudioBook, setAuthorAudioBook] = useState('')

  const theSearchAudioBook = () => {
   if(showAudioBookResult === true) {
     return (
        <div> Searching for AudioBook: {titleAudioBook} {isbnAudioBook} {authorAudioBook}</div>
     );
   }
  }
  
  //DVD PART--------------------------------------
  const [showSearchDvd, setShowDvd] = useState(false)

  const[showDvdResult, setShowDvdResult] = useState(false)

  const[titleDvd, setTitleDvd] =useState('')
  const[idDvd, setIdDvd] = useState('')
  const[directorDvd, setDirectorDvd] = useState('')

  const theSearchDvd = () => {
   if(showDvdResult === true) {
     return (
        <div> Searching for DVD: {titleDvd} {idDvd} {directorDvd}</div>
     );
   }
  }
  

  //magazine PART -----------------------------------
  const [showSearchMgz, setShowMgz] = useState(false)

  const[showMgzResult, setShowMgzResult] = useState(false)

  const[titleMgz, setTitleMgz] =useState('')
  const[idMgz, setIdMgz] = useState('')
  

  const theSearchMgz = () => {
   if(showMgzResult === true) {
     return (
        <div> Searching for Magazine: {titleMgz} {idMgz}</div>
     );
   }
  }


   //DEVICE PART -----------------------------------
  const [showSearchDevice, setShowDevice] = useState(false)

  const[showDeviceResult, setShowDeviceResult] = useState(false)

  const[titleDevice, setTitleDevice] =useState('')
  const[idDevice, setIdDevice] = useState('')
  

  const theSearchDevice = () => {
   if(showDeviceResult === true) {
     return (
        <div> Searching for Device: {titleDevice} {idDevice}</div>
     );
   }
  }

   //MESSAGES PART -------------------------
  const [showSearchMessage, setShowMessage] = useState(false)

  const[showMessageResult, setShowMessageResult] = useState(false)

  const[idMessage, setIdMessage] =useState('')
  const[passwordMessage, setPasswordMessage] = useState('')
  

  const theSearchMessage = () => {
   if(showMessageResult === true) {
     return (
        <div> Searching for Messages: {idMessage} {passwordMessage}</div>
     );
   }
  }

  return (
      <div>
        
      <div className="container">
        <Header />
        {/* <Route path='/book' component={Book}/> */}
        {/* <BookLink /> */}
        {/* <p className="others">search for others here</p> */}
        <ChoiceBar
          onBook={() => setShowBook(!showSearchBook)}
          showBook={showSearchBook}
          onAudioBook={() => setShowAudioBook(!showSearchAudioBook)}
          showAudioBook={showSearchAudioBook}
          onDvd={() => setShowDvd(!showSearchDvd)}
          showDvd={showSearchDvd}
          onMgz={() => setShowMgz(!showSearchMgz)}
          showMgz={showSearchMgz}
          onDevice={() => setShowDevice(!showSearchDevice)}
          showDevice={showSearchDevice}
          onMessage={() => setShowMessage(!showSearchMessage)}
          showMessage = {showSearchMessage}
          
        />
        {showSearchBook && <Book
          onBookResult = {() => setShowBookResult(!showBookResult)}
          myTitleBook = {(e) => {setTitleBook(e.target.value)}}
          myIsbnBook = {(e) => {setIsbnBook(e.target.value)}}
          myAuthorBook = {(e) => {setAuthorBook(e.target.value)}}

        />}
        {showSearchAudioBook && <AudioBook 
          onAudioBookResult = {() => setShowAudioBookResult(!showAudioBookResult)}
          myTitleAudioBook = {(e) => {setTitleAudioBook(e.target.value)}}
          myIsbnAudioBook = {(e) => {setIsbnAudioBook(e.target.value)}}
          myAuthorAudioBook = {(e) => {setAuthorAudioBook(e.target.value)}}
        />}
        {showSearchDvd && <Dvd  
          onDvdResult = {() => setShowDvdResult(!showDvdResult)}
          myTitleDvd = {(e) => {setTitleDvd(e.target.value)}}
          myIdDvd = {(e) => {setIdDvd(e.target.value)}}
          myDirectorDvd = {(e) => {setDirectorDvd(e.target.value)}}
        />}
        {showSearchMgz && <Mgz 
          onMgzResult = {() => setShowMgzResult(!showMgzResult)}
          myTitleMgz = {(e) => {setTitleMgz(e.target.value)}}
          myIdMgz = {(e) => {setIdMgz(e.target.value)}}
        />}
        {showSearchDevice && <Device
          onDeviceResult = {() => setShowDeviceResult(!showDeviceResult)}
          myTitleDevice = {(e) => {setTitleDevice(e.target.value)}}
          myIdDevice = {(e) => {setIdDevice(e.target.value)}}
        />}
        {showSearchMessage && <Message  
          onMessageResult = {() => setShowMessageResult(!showMessageResult)}
          myIdMessage = {(e) => {setIdMessage(e.target.value)}}
          myPasswordMessage = {(e) => {setPasswordMessage(e.target.value)}}
        />}

        


        {/* <button className='btn'>DVD</button>
        <button className='btn'>magazine</button> */}

      </div>
        REFRESH AFTER EACH SEARCH
        
        <div>
          {theSearchBook()}
          {theSearchAudioBook()}
          {theSearchDvd()}
          {theSearchMgz()}
          {theSearchDevice()}
          {theSearchMessage()}
        </div>
      </div>
  );
}

// const SearchBar = () => (
//   return (
//     <SearchBar />
//   )

// );



export default Customer