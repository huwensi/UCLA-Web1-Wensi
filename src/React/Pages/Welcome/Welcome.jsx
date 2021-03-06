import React from 'react';

/* Compontents -----------------------------------*/
// import Slideshow from './Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx';

const Welcome = () => {
    return (
        <div>
            <hi>Welcome</hi>
            {/* <Slideshow /> */}
            <div className="nested">
                <Tabbed />
            </div>
            <div className="nested">
                <Staff />
            </div>
        </div>
    )
}

export default Welcome;