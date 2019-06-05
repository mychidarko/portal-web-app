import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default function Start(props) {
    return props.hasAuth ? <Redirect to="/home" /> :  (
        <StartComponent />
    );
}

function StartComponent() {
    return <Link to="/auth/register">Get Started</Link>
}