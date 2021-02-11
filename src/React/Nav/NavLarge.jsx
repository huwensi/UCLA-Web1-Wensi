import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Nav from './Nav.jsx';

const Navlarge = () => {

    return (
        <NavlargeStyled className='Navlarge'>
            Navlarge 
            <Nav />
        </NavlargeStyled>
    );
}

export default Navlarge;

const NavlargeStyled = styled.div`
display: flex;
justify-content: center;
background-color: #003232;
padding: 20px;
    
    .Nav {
        display: flex;
        width: 500px;
    
    }
    a { flex: 1;
        text-align: center;
        display: block;
        background: teal;
        color: white;
        text-decoration: none;

        border-radius: 5px;

        padding: 10px;
        margin: 0px 5px;

        &.active {
            background-color: #015150;
        }
        &:hover {
            background-color: #02aca9;
            color: #003232;
        }
    }
`;