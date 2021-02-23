import React from 'react';
import { tabItems } from 'React/Pages/Welcome/Tabbed/tabbed_data';
import styled from 'styled-components';

const GalleryItem = ({ item }) => {

    return (
        <GalleryItemStyled className='GalleryItem'>
           <img src={ item.image } alt={ item.title }/>
           <h2>{ item.title }</h2>
           <h3>{ item.category }</h3>
        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
    position: relative;

    h2{
        position: absolute;
        bottom: 0px; left: 0px; right: 0px;
        background-color: rgba(124, 124, 124, 0.473);
        margin: 0px;
        padding: 5px;

    }
    h3 {
        position: absolute;
        top: 0px; left: 0px; right: 0pox;
        background-color: rgba(133, 133, 133, 0.253);
        margin: 0px;
        padding: 5px;
        text-align: right;
    }
    
`;