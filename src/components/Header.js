import React from 'react'
import Login from './Login'
import Logout from './Logout'

function Header({ isLoggedIn }) {
    return (
        <header>
            <h1>PetLand</h1>
            <nav>
                {isLoggedIn ? <Logout /> : <Login />}
            </nav>
        </header>
    )
}

export default Header
