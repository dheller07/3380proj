import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header.js'
import BookLink from './components/BookLink.js'

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
  const [showSearchBook, setShowBook] = useState(false)
  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {
      const bookFromServer = await fetchBook()
      setBook(bookFromServer)
    }

    getBook()
  }, [])

  // fetch book
  const fetchBook = async () => {
    const res = await fetch('http://localhost:3000/tasks')
    const data = await res.json()

    return data
  }

    // search book
  const searchBook = async (book) => {
    const res = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(book),
    })
  
    const data = await res.json()
  }
  
  //AUDIOBOOK PART -------------------------------------
  const [showSearchAudioBook, setShowAudioBook] = useState(false)
  const [audiobook, setAudioBook] = useState([])

  useEffect(() => {
    const getAudioBook = async () => {
      const audiobookFromServer = await fetchAudioBook()
      setAudioBook(audiobookFromServer)
    }

    getAudioBook()
  }, [])

  // fetch Audiobook
  const fetchAudioBook = async () => {
    const res = await fetch('http://localhost:3000/tasks')
    const data = await res.json()

    return data
  }

    // search Audiobook
  const searchAudioBook = async (audiobook) => {
    const res = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(audiobook),
    })
  
    const data = await res.json()
  }

  //DVD PART--------------------------------------

  const [showSearchDvd, setShowDvd] = useState(false)
  const [dvd, setDvd] = useState([])

  useEffect(() => {
    const getDvd = async () => {
      const dvdFromServer = await fetchDvd()
      setDvd(dvdFromServer)
    }

    getDvd()
  }, [])

  // fetch dvd
  const fetchDvd = async () => {
    const res = await fetch('http://localhost:3000/tasks')
    const data = await res.json()

    return data
  }

    // search dvd
  const searchDvd = async (dvd) => {
    const res = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(dvd),
    })
  
    const data = await res.json()
  }
  

  //magazine PART -----------------------------------
  const [showSearchMgz, setShowMgz] = useState(false)
  const [mgz, setMgz] = useState([])

  useEffect(() => {
    const getMgz = async () => {
      const mgzFromServer = await fetchMgz()
      setMgz(mgzFromServer)
    }

    getMgz()
  }, [])

  // fetch magazine
  const fetchMgz = async () => {
    const res = await fetch('http://localhost:3000/tasks')
    const data = await res.json()

    return data
  }

    // search magazine
  const searchMgz = async (mgz) => {
    const res = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(mgz),
    })
  
    const data = await res.json()
  }
  
   //DEVICE PART -----------------------------------
   const [showSearchDevice, setShowDevice] = useState(false)
   const [device, setDevice] = useState([])
 
   useEffect(() => {
     const getDevice = async () => {
       const deviceFromServer = await fetchDevice()
       setDevice(deviceFromServer)
     }
 
     getDevice()
   }, [])
 
   // fetch device
   const fetchDevice = async () => {
     const res = await fetch('http://localhost:3000/tasks')
     const data = await res.json()
 
     return data
   }
 
     // search device
   const searchDevice = async (device) => {
     const res = await fetch('http://localhost:3000/tasks', {
       method: 'POST',
       headers: {
         'Content-type': 'application/json',
       },
       body: JSON.stringify(device),
     })
   
     const data = await res.json()
   }

   //MESSAGES PART -------------------------
   const [showSearchMessage, setShowMessage] = useState(true)
   const [message, setMessage] = useState([])
   useEffect(() => {
    const getMessage = async () => {
      const messageFromServer = await fetchMessage()
      setMessage(messageFromServer)
    }

    getMessage()
  }, [])

  // fetch message
  const fetchMessage = async () => {
    const res = await fetch('http://localhost:3000/tasks')
    const data = await res.json()

    return data
  }

   // search message
   const searchMessage = async (message) => {
    const res = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(message),
    })
  
    const data = await res.json()
  }

  return (
    
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
        {showSearchBook && <Book onBook={searchBook} />}
        {showSearchAudioBook && <AudioBook onAudioBook={searchAudioBook} />}
        {showSearchDvd && <Dvd onDvd={searchDvd} />}
        {showSearchMgz && <Mgz onMgz={searchMgz} />}
        {showSearchDevice && <Device onDevice={searchDevice} />}
        {showSearchMessage && <Message onMessage = {searchMessage} />}


        {/* <button className='btn'>DVD</button>
        <button className='btn'>magazine</button> */}




      </div>
  );
}

// const SearchBar = () => (
//   return (
//     <SearchBar />
//   )

// );



export default Customer