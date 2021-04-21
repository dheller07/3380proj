import React from 'react'
import './Styling.css'

class Devices extends React.Component {
    state = {
        header: <thead id="header">
            <tr>
                <th scope="col">device type</th>
                <th scope="col">model</th>
                <th scope="col">count</th>
            </tr>
        </thead>,
        devices: []
    };

    async componentDidMount() {
        await fetch("./api/audioBook")
            .then(res => res.json())
            .then(devices => {
                devices.map(
                    el => {
                        if (el.count > 0) {
                            this.setState({
                            devices: [...this.state.devices,
                                <tr key={el.id}>
                                    <td>{el.device_type}</td>
                                    <td>{el.model}</td>
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
            <div id='devices'>
                <span id="heading">DEVICES</span>
                <table id="result" className="table text-center table-hover">
                    {this.state.header}
                    <tbody>
                        {this.state.devices}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Devices;
