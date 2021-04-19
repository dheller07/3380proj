//import PropTypes from 'prop-types'
//import { useLocation } from 'react-router-dom'
import Button from './Button'


const ChoiceBar = ({ showBook, onBook,
    showAudioBook, onAudioBook,
    showDvd, onDvd,
    showMgz, onMgz,
    showDevice, onDevice,
    showAuthor, onAuthor,
    showNarrator, onNarrator,
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
                    color={showAuthor ? 'red' : 'green'}
                    text={showAuthor ? 'Author' : 'Author'}
                    onClick={onAuthor}
                />
            </span>
            <span>
                <Button
                    color={showNarrator ? 'red' : 'green'}
                    text={showNarrator ? 'Narrator' : 'Narrator '}
                    onClick={onNarrator}
                />
            </span>
            <span>
                <Button
                    color={showLocation ? 'red' : 'green'}
                    text={showLocation ? 'Location' : 'Locations '}
                    onClick={onLocation}
                />
            </span>
        </h4>
    )
}

export default ChoiceBar