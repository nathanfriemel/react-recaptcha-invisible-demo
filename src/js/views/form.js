import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: true
        };
    }
    componentDidMount() {
        const recaptchaCallback = (token) => {
            const {
                username
            } = this.state;

            // do something with username and token
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
                    <input id='username' name='username' type='text' />
                    <button
                        className='g-recaptcha'
                        data-sitekey='your-sitekey'
                        data-callback='recaptchaCallback'
                        data-badge='inline'
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;
