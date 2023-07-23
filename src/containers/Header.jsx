import React from 'react'

function Header(){
  return (
    <header>
        <img src='./assets/Logo.svg'/>
        <nav>
            <ul>
                <li><a>HOME</a></li>
                <li><a>ABOUT</a></li>
                <li><a>MENU</a></li>
                <li><a>RESERVATIONS</a></li>
                <li><a>ORDER ONLINE</a></li>
                <li><a>LOGIN</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header