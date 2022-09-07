import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Button } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import "./Navbar.css"


export default function Navbar() {
    const [show, setShow] = useState(false);

    return <nav className="nav">
        <svg stroke="currentColor" 
        fill="currentColor" 
        stroke-width="0" 
        viewBox="0 0 512 512" 
        height="2em" 
        width="2em" 
        xmlns="http://www.w3.org/2000/svg">
      </svg>
        <Link to='/' className='site-title'>The Dharma Drop</Link>
        <ul>
        <Button
    onClick={() => setShow(true)}>
    <svg className="hamburger" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
    </Button>
    <Offcanvas show={show} onHide={() => setShow(false)}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <LinkContainer to="/login">
        <Button>Login</Button>
      </LinkContainer>
      <LinkContainer to="/signup">
        <Button>SignUp</Button>
      </LinkContainer>
      <LinkContainer to="/mood">
        <Button>Moods</Button>
      </LinkContainer>
    </Offcanvas.Body>
  </Offcanvas>
        </ul>

    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive === to ? "active" : " "}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}