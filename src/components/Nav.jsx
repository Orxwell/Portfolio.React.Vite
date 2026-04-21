import { Fragment } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'

import Certificates from './Certificates.jsx'
import ContactMe    from './ContactMe.jsx'

function Nav () {
  return <Fragment>
    <nav>
      <section>
        <ul>
          <li><NavLink to="/">Certificates</NavLink></li>
          <li><NavLink to="/contact-me">Contact Me</NavLink></li>
        </ul>
      </section>
    </nav>

    <Routes>
      <Route path="/" element={<Certificates />} />
      <Route path="/contact-me" element={<ContactMe 
        title="Contact Me"
        description="Send me an e-mail with your proposal!"
      />} />
    </Routes>
  </Fragment>
}

export default Nav
