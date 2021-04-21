import React from 'react'
import './Styling.css'

class Mgzs extends React.Component {
    state = {
        header: <thead id="header">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Total Count</th>
            </tr>
        </thead>,
        mgzs: []
    };

    async componentDidMount() {
        await fetch("./api/magzine")
            .then(res => res.json())
            .then(mgzs => {
                mgzs.map(
                    el => {
                        if (el.count > 0) {
                            this.setState({
                            mgzs: [...this.state.mgzs,
                                <tr key={el.id}>
                                    <td>{el.title}</td>
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
            <div id='mgzs'>
                <span id="heading">MAGZINES</span>
                <table id="result" className="table text-center table-hover">
                    {this.state.header}
                    <tbody>
                        {this.state.mgzs}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Mgzs;
