// @flow strict

import * as React from 'react';
import { useState,useEffect } from 'react';
import {useParams } from 'react-router-dom';
import './FriendDetails.css';
import logo from '../Image/giphy.gif';
function FriendDetails() {
    const[user,setuser]=useState([]);
    const[success,setsuccess]=useState(false);
    let{id}=useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setuser(data))
    })
   
    return (
        <div className='details'>
           <div className='details1'>
           <p>Id:{user.id}</p>
           <p>Name:{user.name}</p>
           <p>Username:{user.username}</p>
           <small>phone:{user.phone}</small>
           <h5>website:{user.website}</h5>
           <button onClick={()=>setsuccess(!success)}>success</button>
           </div>
           <div className='details2'>
          {
            success ? <img src={logo} alt='' className='img'/>

                     :<p></p>
          }
           </div>
        </div>
    );
};

export default FriendDetails;