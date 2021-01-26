import React from 'react';
import { Switch, Route } from 'react-router-dom'

/* Components ----------------*/
import Welcome from './Pages/Welcome.jsx';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';

const Main = () => {
    return (
     <main> 
        <switch>
            <Route path='/services' component={ Services } />
            <Route path='/contact' component={ Contact } />
            <Route path='/login' component={ Login } />
            <Route path='/' component={ Welcome } exact />
         </switch>
    </main>
    )
}

export default Main;
