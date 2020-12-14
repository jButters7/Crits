import React, { useState } from 'react';
import '../Auth.css'
const Auth = (props) => {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = () => {
    if (username === 'Crit' && password === 'Crit') {
      props.history.push('/dashboard')
    } else if (username === 'Crit' && password !== 'Crit') {
      console.log('username is correct')
    } else if (username !== 'Crit' && password === 'Crit') {
      console.log('password is correct')
    } else {
      console.log('password and username incorrect')
    }
  }

  return (
    <div className='login-container'>
      <h1 className="text-logo">Helo</h1>
      <div className='login-inputs'>
        <input placeholder='Username' name='username' onChange={e => setUsername(e.target.value)} />
      </div>
      <div className='login-inputs'>
        <input placeholder='Password' name='password' onChange={e => setPassword(e.target.value)} />
      </div>
      <div className='login-buttons-container'>
        <button className='login-button' onClick={() => loginUser()}>Login</button>
      </div>
    </div>
  )
};

export default Auth;