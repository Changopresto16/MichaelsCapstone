import React, { Component, useEffect } from 'react'
import '../styles.css'

export default class Login extends Component {
    render() {
        return (
            function App() {

                function handleCallbackResponse(response) {
                    console.log("Encoded JWT ID token: " + response);
                }
                useEffect(() => {
                    /* global google */
                    google.accounts.id.initialize({
                        client_id: "616610964568-bfl9rak1p3om6a1del6mmgct3von9562.apps.googleusercontent.com",
                        callback: handleCallbackResponse
                    });

                    google.accounts.id.renderButton(
                        document.getElementById("signInDiv"),
                        { theme: "outline", size: "large" }
                    );
                }, [])}
        )
            
    }
};