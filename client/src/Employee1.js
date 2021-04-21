import { useState } from 'react'
import './index.css'

import Header from './components/Header.js'
import ChoiceBar from './components1/ChoiceBar.js'

import Book from './components1/Book.js'
import AudioBook from './components1/AudioBook.js'
import Dvd from './components1/Dvd.js'
import Mgz from './components1/Mgz.js'
import Device from './components1/Device.js'
import Message from './components1/Message.js'
import Button from './components/Button.js'
import AddCustomer from './components1/AddCustomer.js'
import RemoveCustomer from './components1/RemoveCustomer.js'

import CustomerService from './services/customer.service'
import BookService from './services/book.service'
import AudioBookService from './services/audiobook.service'
import DvdService from './services/dvd.service'
import MgzService from './services/magazine.service'
import DeviceService from './services/device.service'
import axios from 'axios'

function Employee1 () {

 //BOOK PART -------------------------------------
  const [showSearchBook, setShowBook] = useState(true)

  const[showBookResult1, setShowBookResult1] = useState(false)
  const[showBookResult2, setShowBookResult2] = useState(false)

  const[idBook, setIdBook] = useState('')
  const[idCustomer, setIdCustomer] = useState('')
  const[idEmployee, setIdEmployee] = useState('')

    const theReturnBook = () => {
        if(showBookResult1 === true) {
            var data = {
                checked_out: 0
            };
            BookService.update(idBook, data)
                .then(response => {
                })
                .catch(e => {
                    console.log(e)
                });
            return (
                <div>Returning book: {idBook}</div>
            );
        }
    }

    const theCheckoutBook = () => {
        if(showBookResult2 === true) {
            var data = {
                checked_out: 1
            };
            BookService.update(idBook, data)
                .then(response => {
                })
                .catch(e => {
                    console.log(e)
                });
            return (
                <div>Checking out book: {idBook} {idCustomer} {idEmployee}</div>
            );
        }
    }

  //AUDIOBOOK PART -------------------------------------
  const [showSearchAudioBook, setShowAudioBook] = useState(false)

  const[showAudioBookResult1, setShowAudioBookResult1] = useState(false)
  const[showAudioBookResult2, setShowAudioBookResult2] = useState(false)

  const[idAudioBook, setIdAudioBook] = useState('')

    const theReturnAudioBook = () => {
        if(showAudioBookResult1 === true) {
            var data = {
                checked_out: 0
            };
            AudioBookService.update(idAudioBook, data)
                .then(response => {
                })
                .catch(e => {
                    console.log(e)
                });
            return (
            <div>Returning Audio book: {idAudioBook}</div>
            );
        }
    }

    const theCheckoutAudioBook = () => {
        var data = {
            checked_out: 1
        };
        AudioBookService.update(idAudioBook, data)
            .then(response => {
            })
            .catch(e => {
                console.log(e)
            });
        if(showAudioBookResult2 === true) {
            return (
            <div>Checking out Audio book: {idAudioBook} {idCustomer} {idEmployee}</div>
            );
        }
    }

  //DVD PART--------------------------------------

  const [showSearchDvd, setShowDvd] = useState(false)

  const[showDvdResult1, setShowDvdResult1] = useState(false)
  const[showDvdResult2, setShowDvdResult2] = useState(false)

  const[idDvd, setIdDvd] = useState('')

    const theReturnDvd = () => {
        if(showDvdResult1 === true) {
            var data = {
                checked_out: 0
            };
            DvdService.update(idDvd, data)
                .then(response => {
                })
                .catch(e => {
                    console.log(e)
                });
            return (
            <div>Returning DVD: {idDvd}</div>
            );
        }
    }

    const theCheckoutDvd = () => {
        if(showDvdResult2 === true) {
            var data = {
                checked_out: 1
            };
            DvdService.update(idDvd, data)
                .then(response => {
                })
                .catch(e => {
                    console.log(e)
                });
            return (
            <div>Checking out DVD: {idDvd} {idCustomer} {idEmployee}</div>
            );
        }
    }
  
  //magazine PART -----------------------------------
  const [showSearchMgz, setShowMgz] = useState(false)

  const[showMgzResult1, setShowMgzResult1] = useState(false)
  const[showMgzResult2, setShowMgzResult2] = useState(false)

  const[idMgz, setIdMgz] = useState('')

    const theReturnMgz = () => {
        if(showMgzResult1 === true) {
            var data = {
                checked_out: 0
            };
            MgzService.update(idMgz, data)
                .then(response => {
                })
                .catch(e => {
                    console.log(e)
                });
            return (
            <div>Returning Magazine: {idMgz}</div>
            );
        }
    }

    const theCheckoutMgz = () => {
        if(showMgzResult2 === true) {
            var data = {
                checked_out: 1
            };
            MgzService.update(idMgz, data)
                .then(response => {
                })
                .catch(e => {
                    console.log(e)
                });
            return (
            <div>Checking out Magazine: {idMgz} {idCustomer} {idEmployee}</div>
            );
        }
    }
    
   //DEVICE PART -----------------------------------
    const [showSearchDevice, setShowDevice] = useState(false)

    const[showDeviceResult1, setShowDeviceResult1] = useState(false)
    const[showDeviceResult2, setShowDeviceResult2] = useState(false)

    const[idDevice, setIdDevice] = useState('')

    const theReturnDevice = () => {
        if(showDeviceResult1 === true) {
            var data = {
                checked_out: 0
            };
            DeviceService.update(idDevice, data)
                .then(response => {
                })
                .catch(e => {
                    console.log(e)
                });
            return (
            <div>Returning Device: {idDevice}</div>
            );
        }
    }

    const theCheckoutDevice = () => {
        if(showDeviceResult2 === true) {
            var data = {
                checked_out: 1
            };
            DeviceService.update(idDevice, data)
                .then(response => {
                })
                .catch(e => {
                    console.log(e)
                });
            return (
            <div>Checking out Device: {idDevice} {idCustomer} {idEmployee}</div>
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


  //ADD CUSTOMER PART ------------
    const [showAddCustomer, setShowAddCustomer] = useState(false)

    const[showTheAdd, setShowTheAdd] = useState(false)

    const[passwordAdd, setPasswordAdd] = useState('')
    const[firstAdd, setFirstAdd] = useState('')
    const[lastAdd, setLastAdd] = useState('')
    const[roleAdd, setRoleAdd] = useState('')

    const theAddCustomer = () => {
        if(showTheAdd === true) {
            var data = {
                pwd: passwordAdd,
                f_name: firstAdd,
                l_name: lastAdd,
                customer_role: roleAdd,
                item_limit: 5,
                acct_balance: 0.00,
                fine_rate: 0.30
            };
            axios.post("http://localhost:8000/api/customer", data)
                .then(response => {
                    console.log(response)
                })
                .catch(e => {
                    console.log(e)
                });

            return (
                <div>Adding Customer: {passwordAdd} {firstAdd} {lastAdd} {roleAdd}</div>
            );
        }
    }

  //REMOVE CUSTOMER----------
    const [showRemoveCustomer, setShowRemoveCustomer] = useState(false)

    const[showTheRemove, setShowTheRemove] = useState(false)

    const[idRemove, setIdRemove] = useState('')

    const theRemoveCustomer = () => {
        if(showTheRemove === true) {
            CustomerService.delete(idRemove)
                .then(response => {
                })
                .catch(e => {
                    console.log(e)
                });
            return (
                <div>Removing Customer: {idRemove}</div>
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
                text={'Add Items'}
                onClick={ChangetoAddItems}
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
            <Header title = "Librarian" />
            
            
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
                onAddCustomer={() => setShowAddCustomer(!showAddCustomer)}
                showCustomerAdd = {showAddCustomer} 
                onRemoveCustomer = {() => setShowRemoveCustomer(!showRemoveCustomer)}
                showCustomerRemove = {showRemoveCustomer}
                
                
            />
            

        {showSearchBook && <Book 
            onBookResult1 = {() => setShowBookResult1(!showBookResult1)}
            onBookResult2 = {() => setShowBookResult2(!showBookResult2)}
            myIdBook = {(e) => setIdBook(e.target.value)}
            myIdCustomer = {(e) => setIdCustomer(e.target.value)}
            myIdEmployee = {(e) => setIdEmployee(e.target.value)}
        />}
        {showSearchAudioBook && <AudioBook 
            onAudioBookResult1 = {() => setShowAudioBookResult1(!showAudioBookResult1)}
            onAudioBookResult2 = {() => setShowAudioBookResult2(!showAudioBookResult2)}
            myIdAudioBook = {(e) => setIdAudioBook(e.target.value)}
            myIdCustomer = {(e) => setIdCustomer(e.target.value)}
            myIdEmployee = {(e) => setIdEmployee(e.target.value)}
        />}
        {showSearchDvd && <Dvd 
            onDvdResult1 = {() => setShowDvdResult1(!showDvdResult1)}
            onDvdResult2 = {() => setShowDvdResult2(!showDvdResult2)}
            myIdDvd = {(e) => setIdDvd(e.target.value)}
            myIdCustomer = {(e) => setIdCustomer(e.target.value)}
            myIdEmployee = {(e) => setIdEmployee(e.target.value)}
        />}
        {showSearchMgz && <Mgz  
            onMgzResult1 = {() => setShowMgzResult1(!showMgzResult1)}
            onMgzResult2 = {() => setShowMgzResult2(!showMgzResult2)}
            myIdMgz = {(e) => setIdMgz(e.target.value)}
            myIdCustomer = {(e) => setIdCustomer(e.target.value)}
            myIdEmployee = {(e) => setIdEmployee(e.target.value)}
        />}
        {showSearchDevice && <Device 
            onDeviceResult1 = {() => setShowDeviceResult1(!showDeviceResult1)}
            onDeviceResult2 = {() => setShowDeviceResult2(!showDeviceResult2)}
            myIdDevice = {(e) => setIdDevice(e.target.value)}
            myIdCustomer = {(e) => setIdCustomer(e.target.value)}
            myIdEmployee = {(e) => setIdEmployee(e.target.value)}
        />}
        {showSearchMessage && <Message 
            onMessageResult = {() => setShowMessageResult(!showMessageResult)}
            myIdMessage = {(e) => {setIdMessage(e.target.value)}}
            myPasswordMessage = {(e) => {setPasswordMessage(e.target.value)}}
        />}
        {showAddCustomer && <AddCustomer  
            onShowTheAdd = {() =>setShowTheAdd(!showTheAdd)}
            myPasswordAdd = {(e) => {setPasswordAdd(e.target.value)}}
            myFirstAdd = {(e) => {setFirstAdd(e.target.value)}}
            myLastAdd = {(e) => {setLastAdd(e.target.value)}}
            myRoleAdd = {(e) => {setRoleAdd(e.target.value)}}
        />}
        {showRemoveCustomer && <RemoveCustomer  
            onShowTheRemove = {() =>setShowTheRemove(!showTheRemove)}
            myIdRemove = {(e) => {setIdRemove(e.target.value)}}
        />}

        </div> 
        REFRESH AFTER EACH ACTION
        <div>
            {theReturnBook()}
            {theCheckoutBook()}
            {theReturnAudioBook()}
            {theCheckoutAudioBook()}
            {theReturnDvd()}
            {theCheckoutDvd()}
            {theReturnMgz()}
            {theCheckoutMgz()}
            {theReturnDevice()}
            {theCheckoutDevice()}
            {theSearchMessage()}
            {theAddCustomer()}
            {theRemoveCustomer()}

        </div>
        </div>
    );
}

export default Employee1;