import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './spinner';

class App extends React.Component {

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        
        if (this.state.lat && !this.state.errorMessage) {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                </div>
            )
        }

        if (!this.state.lat && this.state.errorMessage) {
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            )
        }

        return <Spinner message="Please accept location request " />;

    }
};

ReactDOM.render(<App />, document.querySelector('#root'));
