import React, { useState } from "react";
import "./App.css";


function App() {
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [avatar, setAvatar] = useState("");
  const [accountType, setAccountType] = useState("normal");
  const [newsletter, setNewsletter] = useState(false);


  function handleSubmit(event) {
    event.preventDefault()
  }

  const formData = {
    userName,
    password,
    avatar,
    accountType,
    newsletter
  }
  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create an Account</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={userName}
        onChange={e => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <label htmlFor="avatar">Avatar Image</label>
      <input
        type="text"
        id="avatar"
        value={avatar}
        onChange={e => setAvatar(e.target.value)}
      />
      <img src={avatar} alt="Avatar preview" />
      {/* https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png */}

      <label htmlFor="type">Account Type</label>
      <select
        id="type"
        value={accountType}
        onChange={e => setAccountType(e.target.value)}
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
          checked={newsletter}
          onChange={e => setNewsletter(e.target.checked)}
        />
      </label>

      <input type="submit" value="Sign Up" />
    </form>
  )
}

export default App;
