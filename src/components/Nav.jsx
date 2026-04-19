import { Fragment } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'

import Certificates from './Certificates.jsx'
import ContactMe    from './ContactMe.jsx'

function Nav () {
  return (
    <Fragment>
      <nav>
        <ul>
          <li><NavLink to="/">Certificates</NavLink></li>
          <li><NavLink to="/contact-me">Contact Me</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Certificates />} />
        <Route path="/contact-me" element={<ContactMe 
          title="Contact Me"
          description="¡Envíame un correo con tu propuesta!"
        />} />
      </Routes>
    </Fragment>
  )
}

export default Nav
