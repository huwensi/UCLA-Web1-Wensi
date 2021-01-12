import { divide } from 'lodash';
import React, { useState } from 'react'

const SunAndMoon = () => {

    const [imageSrc, imageSrcupdate] = useState ('/asset/img/moon.png')

    const imageOver = () => {
        imageSrcupdate('/assets/img/sun.png');
    }
    const imageOut = () => {
        imageSrcupdate('/assets/img/moon.png');
    }
     

    return (
        <div>
            The Sun and The moon
           <img
               src={ imageSrc }
               onMouseOver= { imageOver }
               onMouseOut={ imageOut }
            />
           </div>
        )
    }

export default SunAndMoon;
