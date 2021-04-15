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

  //AUDIOBOOK PART -------------------------------------
  const [showSearchAudioBook, setShowAudioBook] = useState(false)


  //DVD PART--------------------------------------

  const [showSearchDvd, setShowDvd] = useState(false)

  

  //magazine PART -----------------------------------
  const [showSearchMgz, setShowMgz] = useState(false)

  
   //DEVICE PART -----------------------------------
   const [showSearchDevice, setShowDevice] = useState(false)

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
            

        {showSearchBook && <Book/>}
        {showSearchAudioBook && <AudioBook  />}
        {showSearchDvd && <Dvd  />}
        {showSearchMgz && <Mgz  />}
        {showSearchDevice && <Device />}

        </div>

        </div>
    );
}

export default AddItems;