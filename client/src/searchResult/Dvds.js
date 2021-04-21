import React from 'react'
import './Styling.css'

class Dvds extends React.Component {
    state = {
        header: <thead id="header">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Director</th>
                <th scope="col">Total Count</th>
            </tr>
        </thead>,
        dvds: []
    };

    async componentDidMount() {
        await fetch("./api/book")
            .then(res => res.json())
            .then(dvds => {
                dvds.map(
                    el => {
                        if (el.count > 0) {
                            this.setState({
                            dvds: [...this.state.dvds,
                                <tr key={el.id}>
                                    <td>{el.title}</td>
                                    <td>{el.director}</td>
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
            <div id='dvds'>
                <span id="heading">DVDS</span>
                <table id="result" className="table text-center table-hover">
                    {this.state.header}
                    <tbody>
                        {this.state.dvds}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Dvds;
