import React from 'react';
import styled from 'styled-components';5


/* Component ---------------------------*/
import FilterNavButton from './FilterNavButton.jsx';



const FilterNav = ({ services, catChosen, catChosenUpdate }) => {

    console.log('FilterNav services', services, catChosen);


    return (
        <FilterNavStyled className='FilterNav'>
            FilterNav 
            <FilterNavButton />
        </FilterNavStyled>
    );
}

export default FilterNav;

const FilterNavStyled = styled.div`
    
`;