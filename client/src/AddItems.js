import { useState} from 'react'
import './index.css'

import Header from './components/Header.js'
import ChoiceBar from './components2/ChoiceBar.js'

import Book from './components2/Book.js'
import AudioBook from './components2/AudioBook.js'
import Dvd from './components2/Dvd.js'
import Mgz from './components2/Mgz.js'
import Device from './components2/Device.js'



function AddItems () {

 //BOOK PART -------------------------------------
    const [showSearchBook, setShowBook] = useState(true)

    const[showBookResult, setShowBookResult] = useState(false)

    const[titleBook, setTitleBook] =useState('')
    const[isbnBook, setIsbnBook] = useState('')
    const[authorBook, setAuthorBook] = useState('')
    const[publisherBook, setPublisherBook] = useState('')
    const[yearBook, setYearBook] = useState('')
    const[editionBook, setEditionBook] = useState('')
    const[seriesBook, setSeriesBook] = useState('')
    const[seriesPositionBook, setSeriesPositionBook] = useState('')
    const[genreBook, setGenreBook] = useState('')

    const theAddBook = () => {
        if(showBookResult === true) {
          return (
             <div> Adding Book: {titleBook} {isbnBook} {authorBook} {publisherBook} {yearBook} {editionBook} {seriesBook} {seriesPositionBook} {genreBook}</div>
            );
        }
    }

  //AUDIOBOOK PART -------------------------------------
    const [showSearchAudioBook, setShowAudioBook] = useState(false)  

    const[showAudioBookResult, setShowAudioBookResult] = useState(false)

    const[titleAudioBook, setTitleAudioBook] =useState('')
    const[isbnAudioBook, setIsbnAudioBook] = useState('')
    const[authorAudioBook, setAuthorAudioBook] = useState('')
    const[narratorAudioBook, setNarratorAudioBook] = useState('')
    const[publisherAudioBook, setPublisherAudioBook] = useState('')
    const[yearAudioBook, setYearAudioBook] = useState('')
    const[editionAudioBook, setEditionAudioBook] = useState('')
    const[seriesAudioBook, setSeriesAudioBook] = useState('')
    const[seriesPositionAudioBook, setSeriesPositionAudioBook] = useState('')
    const[genreAudioBook, setGenreAudioBook] = useState('')

    const theAddAudioBook = () => {
        if(showAudioBookResult === true) {
          return (
                <div> Adding Audio Book: {titleAudioBook} {isbnAudioBook} {authorAudioBook} {narratorAudioBook} {publisherAudioBook} {yearAudioBook} {editionAudioBook} {seriesAudioBook} {seriesPositionAudioBook} {genreAudioBook}</div>
            );
        }
    }

  //DVD PART--------------------------------------

    const [showSearchDvd, setShowDvd] = useState(false)

    const[showDvdResult, setShowDvdResult] = useState(false)

    const[titleDvd, setTitleDvd] =useState('')
    const[dateDvd, setDateDvd] = useState('')
    const[directorDvd, setDirectorDvd] = useState('')
    const[studioDvd, setStudioDvd] = useState('')

    const theAddDvd = () => {
        if(showDvdResult === true) {
          return (
                <div> Adding Dvd: {titleDvd} {dateDvd} {directorDvd} {studioDvd}</div>
            );
        }
    }

  //magazine PART -----------------------------------
    const [showSearchMgz, setShowMgz] = useState(false)

    const[showMgzResult, setShowMgzResult] = useState(false)

    const[titleMgz, setTitleMgz] =useState('')
    const[issueMgz, setIssueMgz] = useState('')
    const[dateMgz, setDateMgz] = useState('')
    const[topicMgz, setTopicMgz] = useState('')

    const theAddMgz = () => {
        if(showMgzResult === true) {
          return (
                <div> Adding Mgz: {titleMgz} {issueMgz} {dateMgz} {topicMgz}</div>
            );
        
        }
    }

  
   //DEVICE PART -----------------------------------
    const [showSearchDevice, setShowDevice] = useState(false)

    const[showDeviceResult, setShowDeviceResult] = useState(false)

    const[typeDevice, setTypeDevice] =useState('')
    const[modelDevice, setModelDevice] = useState('')


    const theAddDevice = () => {
        if(showDeviceResult === true) {
          return (
                <div> Adding Device: {typeDevice} {modelDevice} </div>
            );
        
        }
    }

  //Change to Search Page---------

    return (
        <div>
        <div className = "container">
            <Header title = "Add Items" />
            
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
            />
            

        {showSearchBook && <Book
            onBookResult = {() => setShowBookResult(!showBookResult)}
            myTitleBook = {(e) => setTitleBook(e.target.value)}
            myIsbnBook = {(e) => setIsbnBook(e.target.value)}
            myAuthorBook = {(e) => setAuthorBook(e.target.value)}
            myPublisherBook = {(e) => setPublisherBook(e.target.value)}
            myYearBook = {(e) => setYearBook(e.target.value)}
            myEditionBook = {(e) => setEditionBook(e.target.value)}
            mySeriesBook = {(e) => setSeriesBook(e.target.value)}
            mySeriesPositionBook = {(e) => setSeriesPositionBook(e.target.value)}
            myGenreBook = {(e) => setGenreBook(e.target.value)}
        />}
        {showSearchAudioBook && <AudioBook 
            onAudioBookResult = {() => setShowAudioBookResult(!showAudioBookResult)}
            myTitleAudioBook = {(e) => setTitleAudioBook(e.target.value)}
            myIsbnAudioBook = {(e) => setIsbnAudioBook(e.target.value)}
            myAuthorAudioBook = {(e) => setAuthorAudioBook(e.target.value)}
            myNarratorAudioBook = {(e) => setNarratorAudioBook(e.target.value)}
            myPublisherAudioBook = {(e) => setPublisherAudioBook(e.target.value)}
            myYearAudioBook = {(e) => setYearAudioBook(e.target.value)}
            myEditionAudioBook = {(e) => setEditionAudioBook(e.target.value)}
            mySeriesAudioBook = {(e) => setSeriesAudioBook(e.target.value)}
            mySeriesPositionAudioBook = {(e) => setSeriesPositionAudioBook(e.target.value)}
            myGenreAudioBook = {(e) => setGenreAudioBook(e.target.value)}
        />}
        {showSearchDvd && <Dvd  
            onDvdResult = {() => setShowDvdResult(!showDvdResult)}
            myTitleDvd = {(e) => setTitleDvd(e.target.value)}
            myDateDvd = {(e) => setDateDvd(e.target.value)}
            myDirectorDvd = {(e) => setDirectorDvd(e.target.value)}
            myStudioDvd = {(e) => setStudioDvd(e.target.value)}
        />}
        {showSearchMgz && <Mgz  
            onMgzResult = {() => setShowMgzResult(!showMgzResult)}
            myTitleMgz = {(e) => setTitleMgz(e.target.value)}
            myIssueMgz = {(e) => setIssueMgz(e.target.value)}
            myDateMgz = {(e) => setDateMgz(e.target.value)}
            myTopicMgz = {(e) => setTopicMgz(e.target.value)}
        />}
        {showSearchDevice && <Device 
            onDeviceResult = {() => setShowDeviceResult(!showDeviceResult)}
            myTypeDevice = {(e) => setTypeDevice(e.target.value)}
            myModelDevice = {(e) => setModelDevice(e.target.value)}
        />}

        </div>
        REFRESH AFTER EACH ACTION
            <div>
                {theAddBook()}
                {theAddAudioBook()}
                {theAddDvd()}
                {theAddMgz()}
                {theAddDevice()}
            </div>

        </div>
    );
}

export default AddItems;