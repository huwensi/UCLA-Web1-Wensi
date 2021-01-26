import React from 'react';
import styled from 'styled-components';

const SunAndMoon = () => {

    const [imageSrc, imageSrcUpdate] = useState('/asset/img/moom.png')

    const imageOVer = () => {
        imageSrcUpdate('/assets/img/sun.png')；
    }
    const imageOut = () => {
        imageSrcUpdate('/assets/img/moon.png');
    }

    return (
        <SunAndMoonStyled className='SunAndMoon'>
            <h2>Sun and Moon</h2>
            <img
                src={ imageSrc}
                alt='The Sun and Moon'
                onMouseOver={ imageOver }
                onMouseOut={ imageOut}
                />
        </SunAndMoonStyled>
    );
}

export default SunAndMoon;

const SunAndMoonStyled = styled.div`
    
`;