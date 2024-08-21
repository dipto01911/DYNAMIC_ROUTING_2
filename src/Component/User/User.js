// @flow strict

import * as React from 'react';
import { Link } from 'react-router-dom';
import'./User.css';
function User(props) {
    let user=props.users;
    const adduser=props.adduser;
    return (
        <div className='user'>
        <h1>Id:{user.id}</h1>
        <h3>Name:{user.name}</h3> 
        <h>Email:{user.email}</h>
        <div className='btn'>
<button onClick={()=>adduser(user)}>Add user</button>
<button><Link to={`/about/${user.id}`}> show details</Link></button>
        </div>
    </div>
    );
};

export default User;