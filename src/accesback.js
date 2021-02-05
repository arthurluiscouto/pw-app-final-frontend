import React, { Component } from 'react';

class Api extends Component {
    state = {
        response: ''
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('http://localhost:5000/user');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <>
              <h1 className="App-title">Welcome to React</h1>
              <this.callApi /> 
            <p className="App-intro">{this.state.response}</p>
            </>
        );
    }
}

export default Api;