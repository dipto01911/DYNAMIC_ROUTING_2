// @flow strict

import * as React from 'react';
import { useState,useEffect } from 'react';
import User from '../User/User';
import './Home.css';
function Home() {

            const[user,setuser]=useState([]);
           const[person,setperson]=useState([]);
            useEffect(()=>{
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => setuser(data))
            })

           const adduser=(x)=>{
             let newcart=[...person,x];
             setperson(newcart);
           } 

    return (
        <div className='section'>

                  <div className='section1'>
                   {
                        user.map(x => <User users={x} adduser={adduser}></User>)
                    }
                    </div>  
             
                    <div className='section2'>
        <div className='section3'> 
            <h1>Add User</h1>
        {
            person.map(x => <p className='section4'>id:{x.id}...username:{x.username}</p>)
        }
        </div>
                   </div>
           </div>
    );
};

export default Home;