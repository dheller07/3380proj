import { useState} from 'react'
import './index.css'
import axios from 'axios'

import Header from './components/Header.js'
import ChoiceBar from './components2/ChoiceBar.js'

import Book from './components2/Book.js'
import AudioBook from './components2/AudioBook.js'
import Dvd from './components2/Dvd.js'
import Mgz from './components2/Mgz.js'
import Device from './components2/Device.js'
import Button from "./components/Button";


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
    const[usernameBook, setUsernameBook] = useState('')
    const[passwordBook, setPasswordBook] = useState('')

    const theAddBook = () => {
        if(showBookResult === true) {
            let data = {
                title: titleBook,
                isbn: isbnBook,
                author_id: authorBook,
                publisher: publisherBook,
                publication_year: yearBook,
                edition: editionBook,
                series: seriesBook,
                series_position: seriesPositionBook,
                genre: genreBook,
                checked_out: 0,
                ebook: 0,
                waitlist_capacity: 0,
                location: 1,
                employee_id: usernameBook,
                employee_pwd: passwordBook
            };
            axios.post("http://localhost:8000/api/book", data)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e)
                });
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
    const[usernameAudioBook, setUsernameAudioBook] = useState('')
    const[passwordAudioBook, setPasswordAudioBook] = useState('')

    const theAddAudioBook = () => {
        if(showAudioBookResult === true) {
            let data = {
                title: titleAudioBook,
                isbn: isbnAudioBook,
                author_id: authorAudioBook,
                narrator_id: narratorAudioBook,
                publisher: publisherAudioBook,
                publication_year: yearAudioBook,
                edition: editionAudioBook,
                series: seriesAudioBook,
                series_position: seriesPositionAudioBook,
                genre: genreAudioBook,
                checked_out: 0,
                waitlist_capacity: 0,
                location: 2,
                employee_id: usernameAudioBook,
                employee_pwd: passwordAudioBook
            };
            axios.post("http://localhost:8000/api/audiobook", data)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e)
                });
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
    const[usernameDvd, setUsernameDvd] = useState('')
    const[passwordDvd, setPasswordDvd] = useState('')

    const theAddDvd = () => {
        if(showDvdResult === true) {
            let data = {
                title: titleDvd,
                release_date: dateDvd,
                director: directorDvd,
                studio: studioDvd,
                location: 2,
                checked_out: 0,
                employee_id: usernameDvd,
                employee_pwd: passwordDvd
            };
            axios.post("http://localhost:8000/api/dvd", data)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e)
                });
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
    const[usernameMgz, setUsernameMgz] = useState('')
    const[passwordMgz, setPasswordMgz] = useState('')

    const theAddMgz = () => {
        if(showMgzResult === true) {
            let data = {
                title: titleMgz,
                issue: issueMgz,
                issue_date: dateMgz,
                topic: topicMgz,
                location: 3,
                checked_out: 0,
                employee_id: usernameMgz,
                employee_pwd: passwordMgz
            };
            axios.post("http://localhost:8000/api/magazine", data)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e)
                });
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
    const[usernameDevice, setUsernameDevice] = useState('')
    const[passwordDevice, setPasswordDevice] = useState('')

    const theAddDevice = () => {
        if(showDeviceResult === true) {
            let data = {
                device_type: typeDevice,
                model: modelDevice,
                checked_out: 0,
                waitlist_capacity: 0,
                location: 4,
                employee_id: usernameDevice,
                employee_pwd: passwordDevice
            };
            axios.post("http://localhost:8000/api/device", data)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e)
                });
            return (
                <div> Adding Device: {typeDevice} {modelDevice} </div>
            );
        }
    }

  //Change to Search Page---------

    const ChangetoSearch = () => {
        window.location.href = "/Search";
    }

    //Change to Add Items Page------
    const ChangeToEmployee = () => {
        window.location.href = "/Librarian";
    }

    const ChangeDeleteItems = () => {
        window.location.href = "/Delete";
    }

    return (
        <div>

            <div>
                <Button
                    color={'blue'}
                    text={'Search'}
                    onClick={ChangetoSearch}
                />
            </div>
            <div>
                <Button
                    color={'blue'}
                    text={'Employee'}
                    onClick={ChangeToEmployee}
                />
            </div>
            <div>
                <Button
                    color={'blue'}
                    text={'Delete Items'}
                    onClick={ChangeDeleteItems}
                />
            </div>

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
            myUsernameBook = {(e) => setUsernameBook(e.target.value)}
            myPasswordBook={(e) => setPasswordBook(e.target.value)}
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
            myUsernameAudioBook = {(e) => setUsernameAudioBook(e.target.value)}
            myPasswordAudioBook = {(e) => setPasswordAudioBook(e.target.value)}
        />}
        {showSearchDvd && <Dvd  
            onDvdResult = {() => setShowDvdResult(!showDvdResult)}
            myTitleDvd = {(e) => setTitleDvd(e.target.value)}
            myDateDvd = {(e) => setDateDvd(e.target.value)}
            myDirectorDvd = {(e) => setDirectorDvd(e.target.value)}
            myStudioDvd = {(e) => setStudioDvd(e.target.value)}
            myUsernameDvd = {(e) => setUsernameDvd(e.target.value)}
            myPasswordDvd = {(e) => setPasswordDvd(e.target.value)}
        />}
        {showSearchMgz && <Mgz  
            onMgzResult = {() => setShowMgzResult(!showMgzResult)}
            myTitleMgz = {(e) => setTitleMgz(e.target.value)}
            myIssueMgz = {(e) => setIssueMgz(e.target.value)}
            myDateMgz = {(e) => setDateMgz(e.target.value)}
            myTopicMgz = {(e) => setTopicMgz(e.target.value)}
            myUsernameMgz = {(e) => setUsernameMgz(e.target.value)}
            myPasswordMgz = {(e) => setPasswordMgz(e.target.value)}
        />}
        {showSearchDevice && <Device 
            onDeviceResult = {() => setShowDeviceResult(!showDeviceResult)}
            myTypeDevice = {(e) => setTypeDevice(e.target.value)}
            myModelDevice = {(e) => setModelDevice(e.target.value)}
            myUsernameDevice = {(e) => setUsernameDevice(e.target.value)}
            myPasswordDevice = {(e) => setPasswordDevice(e.target.value)}
        />}

        </div>
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