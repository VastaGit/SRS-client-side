import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleLogin = () => {
    if (!username) {
      setUsernameError('Username cannot be empty')
    } else {
      setUsernameError('')
    }

    if (!password) {
      setPasswordError('Password cannot be empty')
    } else {
      setPasswordError('')
    }

    if (username && password) {
      onLogin(username, password)
    }
  }

  return (
    <div className='flex items-center justify-center mt-48'>
      <div
        className='bg-[#b794f4] p-8 rounded-lg border-4 border-black w-2/6'
        style={{ boxShadow: '6px 6px 0px 0px rgba(0, 0, 0, 1)' }}
      >
        <h2 className='text-2xl font-bold text-black text-center mb-6'>
          Login
        </h2>
        <div className='mb-4'>
          <label
            className='block text-black text-m font-bold mb-2'
            htmlFor='username'
          >
            Username
          </label>
          <input
            className='w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500'
            type='text'
            id='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <p style={{ color: 'red', fontWeight: 'bold'  }}>{usernameError}</p>
        </div>
        <div className='mb-4'>
          <label
            className='block text-black text-m font-bold mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500'
            type='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <p style={{ color: 'red', fontWeight: 'bold'  }}>{passwordError}</p>
        </div>
        <button
          className='bg-white text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black  transition duration-300 hover:scale-105'
          onClick={handleLogin}
          onMouseEnter={e =>
            (e.target.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)')
          }
          onMouseLeave={e => (e.target.style.boxShadow = 'none')}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
