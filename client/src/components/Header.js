
import PropTypes from 'prop-types'

const Header = ({ title }) => {

    return (
        <header>
            <h1 style = {headingStyle}>{title}</h1>

        </header>
    )
}

Header.defaultProps = {
    title: 'Library',

}


Header.proTypes = {
    title: PropTypes.string.isrequired,
}

const headingStyle = {
    textAlign: 'center'

}

export default Header