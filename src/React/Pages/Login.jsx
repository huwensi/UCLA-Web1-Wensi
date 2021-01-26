import React, { useState } from 'react'

const Login = () => {

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
               alt='The Sun and Moon'
               onMouseOver= { imageOver }
               onMouseOut={ imageOut }
            />
        </div>
    )
}

export default Login;
