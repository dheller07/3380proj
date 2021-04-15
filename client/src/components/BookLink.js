import { Link } from 'react-router-dom'

const BookLink = () => {
    return (
        <h2>
            <Link to='/book'>Looking for a book?</Link>
        </h2>
        // <h2>looking for a book?</h2>
    )
}

export default BookLink