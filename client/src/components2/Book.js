import { useState } from 'react'

const Book = () => {

    const [isbn, theISBN] = useState('')
    const [title, theTitle] = useState('')
    const [authorID, theAuthorID] = useState('')
    const [publisherID, thePublisherID] = useState('')
    const [publicationYear, thePublicationYear] = useState('')
    const [edition, theEdition] = useState('')
    const [series, theSeries] = useState('')
    const [seriesPosition, theSeriesPosition] = useState('')
    const [genre, theGenre] = useState('')
    

    const submitBookAdd = (event) => {
        console.log(isbn);
        console.log(title);
        console.log(authorID);
        console.log(publisherID);
        console.log(publicationYear);
        console.log(edition);
        console.log(series);
        console.log(seriesPosition);
        console.log(genre);
        event.preventDefault();
    }

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>ISBN</label>
                <input
                    type='ID'
                    placeholder='enter the ISBN'
                    onChange = {(e) => {
                        theISBN(e.target.value)
                    }}
                />
                <label>Title</label>
                <input
                    type='text'
                    placeholder='enter the Title'
                    onChange = {(e) => {
                        theTitle(e.target.value)
                    }}
                />
                <label>AuthorID</label>
                <input
                    type='ID'
                    placeholder='enter the AuthorID'
                    onChange = {(e) => {
                        theAuthorID(e.target.value)
                    }}
                />
                <label>PublisherID</label>
                <input
                    type='ID'
                    placeholder='enter the PublisherID'
                    onChange = {(e) => {
                        thePublisherID(e.target.value)
                    }}
                />
                <label>Publication Year</label>
                <input
                    type='ID'
                    placeholder='enter the Publication Year'
                    onChange = {(e) => {
                        thePublicationYear(e.target.value)
                    }}
                />
                <label>Edition</label>
                <input
                    type='ID'
                    placeholder='enter the Edition'
                    onChange = {(e) => {
                        theEdition(e.target.value)
                    }}
                />
                <label>Series</label>
                <input
                    type='ID'
                    placeholder='enter the Series'
                    onChange = {(e) => {
                        theSeries(e.target.value)
                    }}
                />
                <label>Series Position</label>
                <input
                    type='ID'
                    placeholder='enter the Series Position'
                    onChange = {(e) => {
                        theSeriesPosition(e.target.value)
                    }}
                />
                <label>Genre</label>
                <input
                    type='text'
                    placeholder='enter the Genre'
                    onChange = {(e) => {
                        theGenre(e.target.value)
                    }}
                />
            </div>
            
    
            <button className='btn btn-block' onClick = { submitBookAdd} > Add </button>
        </form>
    )

}



export default Book