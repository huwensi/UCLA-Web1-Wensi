import React from 'react';
import styled from 'styled-components';




const FilterNavButton = ({ category, catChosen, catChosenUpdate }) => {

    console.log('FilterNavButton category', category);

    const handleCatUpdate = () => {
        catChosenUpdate(category);
    }

    const theClassName = (category === catChosen)
        ? `FilterNavButton active`
        : `FilterNavButton`

    return (
        <FilterNavButtonStyled className={ theClassName }>
            <button
                onClick={ handleCatUpdate }
            >
                { category }
            </button>
        </FilterNavButtonStyled>
    );
}

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`
    button {
        display: inline-block;
        width: 150px;
        background-color: teal;
        padding: 10px 0px;
        margin: 0px 10px;
    }

    &.active {
        button {
            background-color: #3434c4
        }
    }
    
`;