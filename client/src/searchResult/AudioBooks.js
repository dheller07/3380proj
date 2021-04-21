import React from 'react'
import './Styling.css'

class AudioBooks extends React.Component {
    state = {
        header: <thead id="header">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">ISBN</th>
            </tr>
        </thead>,
        audioBooks: []
    };

    async componentDidMount() {
        await fetch("./api/audioBook")
            .then(res => res.json())
            .then(audioBooks => {
                audioBooks.map(
                    el => {
                        if (el.count > 0) {
                            this.setState({
                            audioBooks: [...this.state.audioBooks,
                                <tr key={el.id}>
                                    <td>{el.audiobook}</td>
                                    <td>{el.author}</td>
                                    <td>{el.isbn}</td>
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
            <div id='audioBooks'>
                <span id="heading">AUDIOBOOKS</span>
                <table id="result" className="table text-center table-hover">
                    {this.state.header}
                    <tbody>
                        {this.state.audioBooks}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AudioBooks;
