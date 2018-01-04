import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.setUsername = this.setUsername.bind(this);

        this.state = {
            username: ''
        };
    }
    componentDidMount() {
        const recaptchaCallback = (token) => {
            const {
                username
            } = this.state;

            // do something with username and token
            console.log('token', token);
        };
        window.recaptchaCallback = recaptchaCallback.bind(this);
    }

    componentWillUnmount() {
        delete window.recaptchaCallback;
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor='username'>Username</label>
                    <input id='username' name='username' type='text' onChange={this.setUsername} />
                    <button
                        className='g-recaptcha'
                        data-sitekey='your-sitekey' // Wont work without a valid sitekey
                        data-callback='recaptchaCallback'
                        data-badge='inline'
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }

    setUsername(event) {
      this.setState({
        username: event.target.value
      })
    }
}

export default Form;
