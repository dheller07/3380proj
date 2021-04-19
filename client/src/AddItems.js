import { useState} from 'react'
import './index.css'

import Header from './components/Header.js'
import ChoiceBar from './components2/ChoiceBar.js'

import Book from './components2/Book.js'
import AudioBook from './components2/AudioBook.js'
import Dvd from './components2/Dvd.js'
import Mgz from './components2/Mgz.js'
import Device from './components2/Device.js'
import Author from './components2/Author.js'
import Narrator from './components2/Narrator.js'
import Location from './components1/Location.js'


import BookService from './services/book.service'
import AudioBookService from './services/audiobook.service'
import DvdService from './services/dvd.service'
import MgzService from './services/magazine.service'
import DeviceService from './services/device.service'
import AuthorService from './services/author.service'
import NarratorService from './services/narrators.service'
import LocationService from './services/location.service'





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
            var data = {
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
                location: 1
            };
            BookService.create(data)
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

    const theAddAudioBook = () => {
        if(showAudioBookResult === true) {
            var data = {
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
                location: 2
            };
            AudioBookService.create(data)
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

    const theAddDvd = () => {
        if(showDvdResult === true) {
            var data = {
                title: titleDvd,
                release_date: dateDvd,
                director: directorDvd,
                studio: studioDvd,
                location: 2,
                checked_out: 0
                
            };
            DvdService.create(data)
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

    const theAddMgz = () => {
        if(showMgzResult === true) {
            var data = {
                title: titleMgz,
                issue: issueMgz,
                issue_date: dateMgz,
                topic: topicMgz,
                location: 3,
                checked_out: 0
                
            };
            MgzService.create(data)
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


    const theAddDevice = () => {
        if(showDeviceResult === true) {
            var data = {
                device_type: typeDevice,
                model: modelDevice,
                checked_out: 0,
                waitlist_capacity: 0,
                location: 4
            };
            DeviceService.create(data)
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

        //AUTHOR PART -----------------------------------
        const [showAuthor, setShowAuthor] = useState(false)

        const[showAuthorResult, setShowAuthorResult] = useState(false)
    
        const [authorFirst, setAuthorFirst] = useState('')
        const [authorLast, setAuthorLast] = useState('')
        const [authorOrigin, setAuthorOrigin] = useState('')
        const [authorBorn, setAuthorBorn] = useState('')
        const [authorDied, setAuthorDied] = useState('')
    
        const theAuthor = () => {
            if(showAuthor === true) {
                var data = {
                    af_name: authorFirst,
                    al_name: authorLast,
                    a_origin: authorOrigin,
                    a_born: authorBorn,
                    a_died: authorDied,
                };
                AuthorService.create(data)
                    .then(response => {
                    })
                    .catch(e => {
                        console.log(e)
                    });  
                return (
                    <div>Adding Author: {authorFirst} {authorLast} {authorOrigin} {authorBorn} {authorDied}</div>
                );
            }
        }
    
        //NARRATOR PART -----------------------------------
        const [showNarrator, setShowNarrator] = useState(false)
    
        const[showNarratorResult, setShowNarratorResult] = useState(false)
    
        const [narratorFirst, setNarratorFirst] = useState('')
        const [narratorLast, setNarratorLast] = useState('')
        const [narratorOrigin, setNarratorOrigin] = useState('')
        const [narratorBorn, setNarratorBorn] = useState('')
        const [narratorDied, setNarratorDied] = useState('')
    
        const theNarrator = () => {
            if(showNarrator === true) {
                var data = {
                    nf_name: narratorFirst,
                    nl_name: narratorLast,
                    n_origin: narratorOrigin,
                    n_born: narratorBorn,
                    n_died: narratorDied,
                };
                NarratorService.create(data)
                    .then(response => {
                    })
                    .catch(e => {
                        console.log(e)
                    });
    
                return (
                    <div>Adding Narrator: {narratorFirst} {narratorLast} {narratorOrigin} {narratorBorn} {narratorDied}</div>
                );
            }
        }
    
        //LOCATION PART -----------------------------------
        const [showLocation, setShowLocation] = useState(false)
    
        const[showLocationResult, setShowLocationResult] = useState(false)
    
        const [LocationName, setLocationName] = useState('')
        const [LocationAddress, setLocationAddress] = useState('')
        const [LocationPhone, setLocationPhone] = useState('')
    
    
        const theLocation = () => {
            if(showLocation === true) {
                var data = {
                    location_name: LocationName,
                    location_address: LocationAddress,
                    location_phone: LocationPhone,
    
                };
                LocationService.create(data)
                    .then(response => {
                    })
                    .catch(e => {
                        console.log(e)
                    });
    
                return (
                    <div>Adding Location: {LocationName} {LocationAddress} {LocationPhone}</div>
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
                onAuthor={() => setShowAuthor(!showAuthor)}
                showAuthor={showAuthor}
                onNarrator={() => setShowNarrator(!showNarrator)}
                showNarrator={showNarrator}
                onLocation={() => setShowLocation(!showLocation)}
                showLocation={showLocation}             
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
        {showAuthor && <Author 
            onAuthorResult = {() => setShowAuthorResult(!showAuthorResult)}
            myAuthorFirst = {(e) => {setAuthorFirst(e.target.value)}}
            myAuthorLast = {(e) => {setAuthorLast(e.target.value)}}
            myAuthorOrigin = {(e) => {setAuthorOrigin(e.target.value)}}
            myAuthorBorn = {(e) => {setAuthorBorn(e.target.value)}}
            myAuthorDied = {(e) => {setAuthorDied(e.target.value)}}
        />}
        {showNarrator && <Narrator
            onNarratorResult = {() => setShowNarratorResult(!showNarratorResult)}
            myNarratorFirst = {(e) => {setNarratorFirst(e.target.value)}}
            myNarratorLast = {(e) => {setNarratorLast(e.target.value)}}
            myNarratorOrigin = {(e) => {setNarratorOrigin(e.target.value)}}
            myNarratorBorn = {(e) => {setNarratorBorn(e.target.value)}}
            myNarratorDied = {(e) => {setNarratorDied(e.target.value)}}
        />}
        {showLocation && <Location
            onLocationResult = {() => setShowLocationResult(!showLocationResult)}
            myLocationName = {(e) => {setLocationName(e.target.value)}}
            myLocationAddress = {(e) => {setLocationAddress(e.target.value)}}
            myLocationPhone = {(e) => {setLocationPhone(e.target.value)}}

        />}

        </div>
        REFRESH AFTER EACH ACTION
            <div>
                {theAddBook()}
                {theAddAudioBook()}
                {theAddDvd()}
                {theAddMgz()}
                {theAddDevice()}
                {theAuthor()}
                {theNarrator()}
                {theLocation()}
            </div>

        </div>
    );
}

export default AddItems;