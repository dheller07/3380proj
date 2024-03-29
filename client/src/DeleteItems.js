import { useState} from 'react'
import './index.css'

import Header from './components/Header.js'
import ChoiceBar from './components2/ChoiceBar.js'

import Book from './components3/Book.js'
import AudioBook from './components3/AudioBook.js'
import Dvd from './components3/Dvd.js'
import Mgz from './components3/Mgz.js'
import Device from './components3/Device.js'
import axios from "axios";
import Button from "./components/Button";


function DeleteItems () {

 //BOOK PART -------------------------------------
    const [showSearchBook, setShowBook] = useState(true)

    const[showBookResult, setShowBookResult] = useState(false)

    const[IDBook, setIDBook] =useState('')
    

    const theRemoveBook = () => {
        if(showBookResult === true) {

            axios.put("http://localhost:8000/api/book", IDBook)
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

            axios.put("http://localhost:8000/api/audiobook", IDAudioBook)
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

            axios.put("http://localhost:8000/api/dvd", IDDvd)
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
            axios.put("http://localhost:8000/api/magazine", IDMgz)
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
            axios.put("http://localhost:8000/api/device", IDDevice)
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

  //Change to Search Page---------

    const ChangetoSearch = () => {
        window.location.href = "/Search";
    }

    //Change to Add Items Page------
    const ChangetoAddItems = () => {
        window.location.href = "/Add";
    }

    const ChangeToEmployee = () => {
        window.location.href = "/Librarian";
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
                    text={'Add Items'}
                    onClick={ChangetoAddItems}
                />
            </div>
            <div>
                <Button
                    color={'blue'}
                    text={'Employee'}
                    onClick={ChangeToEmployee}
                />
            </div>

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

        </div>
        REFRESH AFTER EACH ACTION
            <div>
                {theRemoveBook()}
                {theRemoveAudioBook()}
                {theRemoveDvd()}
                {theRemoveMgz()}
                {theRemoveDevice()}
            </div>

        </div>
    );
}

export default DeleteItems;