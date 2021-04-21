import React from 'react'
import './Styling.css'

class Books extends React.Component {
    state = {
        header: <thead id="header">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">ISBN</th>
                <th scope="col">Total Count</th>
            </tr>
        </thead>,
        books: []
    };

    async componentDidMount() {
        await fetch("./api/book")
            .then(res => res.json())
            .then(books => {
                books.map(
                    el => {
                        if (el.count > 0) {
                            this.setState({
                            books: [...this.state.books,
                                <tr key={el.id}>
                                    <td>{el.book}</td>
                                    <td>{el.author}</td>
                                    <td>{el.isbn}</td>
                                    <td>{el.count}</td>
                                </tr>]
                            })
                        }
                        return el;
                    }
                )
            })

    }

    render() {
        return (
            <div id='books'>
                <span id="heading">BOOKS</span>
                <table id="result" className="table text-center table-hover">
                    {this.state.header}
                    <tbody>
                        {this.state.books}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Books;
