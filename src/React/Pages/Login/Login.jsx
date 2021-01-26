import React, { useState } from 'react'
import LoginForm from './LoginForm';

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
            <h1>Login</h1>
            <LoginForm />

            <h2>Sun and Moon</h2>
        
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
