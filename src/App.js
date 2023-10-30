import React, { useState } from "react";
import "./App.css";


function App() {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    avatar: '',
    accountType: 'free',
    newsletter: false
  })

  function handleSubmit(event) {
    event.preventDefault()
  }

  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create an Account</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={formData.userName}
        onChange={e => setFormData({ ...formData, userName: e.target.value })}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={formData.password}
        onChange={e => setFormData({ ...formData, password: e.target.value })}
      />

      <label htmlFor="avatar">Avatar Image</label>
      <input
        type="text"
        id="avatar"
        value={formData.avatar}
        onChange={e => setFormData({ ...formData, avatar: e.target.value })}

      />
      <img src={formData.avatar} alt="Avatar preview" />
      {/* https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png */}

      <label htmlFor="type">Account Type</label>
      <select
        id="type"
        value={formData.accountType}
        onChange={e => setFormData({ ...formData, accountType: e.target.value })}

      >
        <option value="free">Free</option>
        <option value="normal">Normal</option>
        <option value="pro">Pro</option>
      </select>

      <label>
        Get Our Newsletter!
        <input
          type="checkbox"
          id="newsletter"
          checked={formData.newsletter}
          onChange={e => setFormData({ ...formData, newsletter: e.target.checked })}

        />
      </label>

      <input type="submit" value="Sign Up" />
    </form>
  )
}

export default App;
