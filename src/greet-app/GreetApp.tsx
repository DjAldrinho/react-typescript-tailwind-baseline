import React from 'react';
import PropTypes from 'prop-types';

export const GreetApp = ({name}: any) => {
    return (
        <div>
            <h1>GreetApp</h1>
            <p>Hello, {name}!</p>
        </div>
    );
}


GreetApp.propTypes = {
    name: PropTypes.string.isRequired
}
