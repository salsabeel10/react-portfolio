import React, { useState } from 'react'
import './Login.css'
import { account } from '../../appwriteConfig'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await account.createEmailPasswordSession(email, password)
      let user = await account.get()

      if (user.emailVerification) {
        console.log('User logged in:', user)
      } else {
        await account.deleteSession('current') // Logout user if email is not verified
        console.log('error user not found')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
