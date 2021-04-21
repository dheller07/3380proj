import { useState} from 'react'
import './index.css'

import Header from './components/Header.js'
import ChoiceBar from './components2/ChoiceBar.js'

import Book from './components3/Book.js'
import AudioBook from './components3/AudioBook.js'
import Dvd from './components3/Dvd.js'
import Mgz from './components3/Mgz.js'
import Device from './components3/Device.js'
import Author from './components3/Author.js'
import Narrator from './components3/Narrator.js'
import Location from './components3/Location.js'

import BookService from './services/book.service'
import AudioBookService from './services/audiobook.service'
import DvdService from './services/dvd.service'
import MgzService from './services/magazine.service'
import DeviceService from './services/device.service'
import AuthorService from './services/author.service'
import NarratorService from './services/narrators.service'
import LocationService from './services/location.service'




function DeleteItems () {

 //BOOK PART -------------------------------------
    const [showSearchBook, setShowBook] = useState(true)

    const[showBookResult, setShowBookResult] = useState(false)

    const[IDBook, setIDBook] =useState('')
    

    const theRemoveBook = () => {
        if(showBookResult === true) {
            
            BookService.delete(IDBook)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e)
                });
            return (
                <div> Removing Book: {IDBook}</div>
            );
        }
    }

  //AUDIOBOOK PART -------------------------------------
    const [showSearchAudioBook, setShowAudioBook] = useState(false)  

    const[showAudioBookResult, setShowAudioBookResult] = useState(false)

    const[IDAudioBook, setIDAudioBook] =useState('')


    const theRemoveAudioBook = () => {
        if(showAudioBookResult === true) {
            
            AudioBookService.delete(IDAudioBook)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e)
                });
            return (
                <div> Removing Audio Book: {IDAudioBook}</div>
            );
        }
    }

  //DVD PART--------------------------------------

    const [showSearchDvd, setShowDvd] = useState(false)

    const[showDvdResult, setShowDvdResult] = useState(false)

    const[IDDvd, setIDDvd] =useState('')


    const theRemoveDvd = () => {
        if(showDvdResult === true) {

            DvdService.delete(IDDvd)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e)
                });
            return (
                <div> Removing Dvd: {IDDvd}</div>
            );
        }
    }

  //magazine PART -----------------------------------
    const [showSearchMgz, setShowMgz] = useState(false)

    const[showMgzResult, setShowMgzResult] = useState(false)

    const[IDMgz, setIDMgz] =useState('')


    const theRemoveMgz = () => {
        if(showMgzResult === true) {
            MgzService.delete(IDMgz)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e)
                });
            return (
                <div> Removing Mgz: {IDMgz}</div>
            );
        
        }
    }

  
   //DEVICE PART -----------------------------------
    const [showSearchDevice, setShowDevice] = useState(false)

    const[showDeviceResult, setShowDeviceResult] = useState(false)

    const[IDDevice, setIDDevice] =useState('')



    const theRemoveDevice = () => {
        if(showDeviceResult === true) {
            DeviceService.delete(IDDevice)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e)
                });
            return (
                <div> Removing Device: {IDDevice} </div>
            );
        
        }
    }

    //Author PART -----------------------------------
    const [showSearchAuthor, setShowAuthor] = useState(false)

    const[showAuthorResult, setShowAuthorResult] = useState(false)

    const[IDAuthor, setIDAuthor] =useState('')



    const theRemoveAuthor = () => {
        if(showAuthorResult === true) {
            AuthorService.delete(IDAuthor)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e)
                });
            return (
                <div> Removing Author: {IDAuthor} </div>
            );
        
        }
    }

    //Narrator PART -----------------------------------
    const [showSearchNarrator, setShowNarrator] = useState(false)

    const[showNarratorResult, setShowNarratorResult] = useState(false)

    const[IDNarrator, setIDNarrator] =useState('')



    const theRemoveNarrator = () => {
        if(showNarratorResult === true) {
            NarratorService.delete(IDNarrator)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e)
                });
            return (
                <div> Removing Narrator: {IDNarrator} </div>
            );
        
        }
    }

    //Location PART -----------------------------------
    const [showSearchLocation, setShowLocation] = useState(false)

    const[showLocationResult, setShowLocationResult] = useState(false)

    const[IDLocation, setIDLocation] =useState('')



    const theRemoveLocation = () => {
        if(showLocationResult === true) {
            LocationService.delete(IDLocation)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log(e)
                });
            return (
                <div> Removing Location: {IDLocation} </div>
            );
        
        }
    }

  //Change to Search Page---------

    return (
        <div>
        <div className = "container">
            <Header title = "Delete Items" />
            
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
                    onAuthor={() => setShowAuthor(!showSearchAuthor)}
                    showAuthor={showSearchAuthor}
                    onNarrator={() => setShowNarrator(!showSearchNarrator)}
                    showNarrator={showSearchNarrator}
                    onLocation={() => setShowLocation(!showSearchLocation)}
                    showLocation={showSearchLocation}
            />
            

        {showSearchBook && <Book
            onBookResult = {() => setShowBookResult(!showBookResult)}
            myIDBook = {(e) => setIDBook(e.target.value)}
            
        />}
        {showSearchAudioBook && <AudioBook 
            onAudioBookResult = {() => setShowAudioBookResult(!showAudioBookResult)}
            myIDAudioBook = {(e) => setIDAudioBook(e.target.value)}
            
        />}
        {showSearchDvd && <Dvd  
            onDvdResult = {() => setShowDvdResult(!showDvdResult)}
            myIDDvd = {(e) => setIDDvd(e.target.value)}
            
        />}
        {showSearchMgz && <Mgz  
            onMgzResult = {() => setShowMgzResult(!showMgzResult)}
            myIDMgz = {(e) => setIDMgz(e.target.value)}
            
        />}
        {showSearchDevice && <Device 
            onDeviceResult = {() => setShowDeviceResult(!showDeviceResult)}
            myIDDevice = {(e) => setIDDevice(e.target.value)}
            
                />}
                {showSearchAuthor && <Author 
            onAuthorResult = {() => setShowAuthorResult(!showAuthorResult)}
            myIDAuthor = {(e) => setIDAuthor(e.target.value)}
            
                />}
                {showSearchNarrator && <Narrator
            onNarratorResult = {() => setShowNarratorResult(!showNarratorResult)}
            myIDNarrator = {(e) => setIDNarrator(e.target.value)}
            
                />}
                {showSearchLocation && <Location
            onLocationResult = {() => setShowLocationResult(!showLocationResult)}
            myIDLocation = {(e) => setIDLocation(e.target.value)}
            
        />}

        </div>
        REFRESH AFTER EACH ACTION
            <div>
                {theRemoveBook()}
                {theRemoveAudioBook()}
                {theRemoveDvd()}
                {theRemoveMgz()}
                {theRemoveDevice()}
                {theRemoveAuthor()}
                {theRemoveNarrator()}
                {theRemoveLocation()}

            </div>

        </div>
    );
}

export default DeleteItems;