import React from 'react';
import { Redirect } from 'react-router-dom';

const Index = props => {
    return props.hasAuth ? <Redirect to="/home" /> : <Redirect to="/auth/login" />;
}
 
export default Index;
