//import PropTypes from 'prop-types'
//import { useLocation } from 'react-router-dom'
import Button from './Button'


const ChoiceBar = ({ showBook, onBook,
    showAudioBook, onAudioBook,
    showDvd, onDvd,
    showMgz, onMgz,
    showDevice, onDevice, showMessage, onMessage,
    showCustomerAdd, onAddCustomer, showCustomerRemove, onRemoveCustomer,
    showLibrarianAdd, onAddLibrarian, showLibrarianRemove, onRemoveLibrarian,
    showAuthor, onAuthor, showNarrator, onNarrator,
    showLocation, onLocation}) => {
    
    return (
        <h4>
            <span>
                <Button
                    color={showBook ? 'red' : 'green'}
                    text={showBook ? 'Book' : 'Book'}
                    onClick={onBook}
                />
            </span>
            <span>
                <Button
                    color={showAudioBook ? 'red' : 'green'}
                    text={showAudioBook ? 'AudioBook' : 'AudioBook'}
                    onClick={onAudioBook}
                />
            </span>
            <span>
                <Button
                    color={showDvd ? 'red' : 'green'}
                    text={showDvd ? 'DVD' : 'DVD'}
                    onClick={onDvd}
                />
            </span>

            <span>
                <Button
                    color={showMgz ? 'red' : 'green'}
                    text={showMgz ? 'Magazine' : 'Magazine'}
                    onClick={onMgz}
                />
            </span>
            <span>
                <Button
                    color={showDevice ? 'red' : 'green'}
                    text={showDevice ? 'Device' : 'Device'}
                    onClick={onDevice}
                />
            </span>
            <span>
                <Button
                    color={showMessage ? 'red' : 'green'}
                    text={showMessage ? 'Messages' : 'Messages'}
                    onClick={onMessage}
                />
            </span>
            <span>
                <Button
                    color={showCustomerAdd ? 'red' : 'green'}
                    text={showCustomerAdd ? 'Add Customer' : 'Add Customer'}
                    onClick={onAddCustomer}
                />
            </span>
            <span>
                <Button
                    color={showCustomerRemove ? 'red' : 'green'}
                    text={showCustomerRemove ? 'Remove Customer' : 'Remove Customer'}
                    onClick={onRemoveCustomer}
                />
            </span>
            <span>
                <Button
                    color={showLibrarianAdd ? 'red' : 'green'}
                    text={showLibrarianAdd ? 'Add Librarian' : 'Add Librarian'}
                    onClick={onAddLibrarian}
                />
            </span>
            <span>
                <Button
                    color={showLibrarianRemove ? 'red' : 'green'}
                    text={showLibrarianRemove ? 'Remove Librarian' : 'Remove Librarian'}
                    onClick={onRemoveLibrarian}
                />
            </span>
            <span>
                <Button
                    color={showAuthor ? 'red' : 'green'}
                    text={showAuthor ? 'Add Author' : 'Add Author'}
                    onClick={onAuthor}
                />
            </span>
            <span>
                <Button
                    color={showNarrator ? 'red' : 'green'}
                    text={showNarrator ? 'Add Narrator' : 'Add Narrator '}
                    onClick={onNarrator}
                />
            </span>
            <span>
                <Button
                    color={showLocation ? 'red' : 'green'}
                    text={showLocation ? 'Add Location' : 'Add Locations '}
                    onClick={onLocation}
                />
            </span>
        </h4>
    )
}

export default ChoiceBar