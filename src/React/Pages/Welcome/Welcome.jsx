import React from 'react';

/* Compontents -----------------------------------*/
import Slideshow from './Slideshow.jsx';
import Tabbed from './Tabbed.jsx';
import Staff from './Staff.jsx';

const Welcome = () => {
    return (
        <div>
            <hi>Welcome</hi>
            <Slideshow />
            <Tabbed />
            <Staff />
        </div>
    )
}

export default Welcome;