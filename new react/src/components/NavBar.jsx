import React from 'react'
import { Fragment } from 'react'

const NavBar = () => {
  return (
    <Fragment>
        <div id='conatiner' style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <h1>Logo</h1>
            <ul > 
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
        </div>
    </Fragment>
  )
}

export default NavBar