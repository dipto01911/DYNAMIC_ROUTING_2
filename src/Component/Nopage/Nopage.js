// @flow strict

import * as React from 'react';
import './Nopage.css';
import logo from '../Image/NOT.gif';

function Nopage() {
    return (
        <div className='nopage'>
            
            <img src={logo} alt='' className='image'/>
        </div>
    );
};

export default Nopage;