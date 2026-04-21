import { BrowserRouter } from 'react-router-dom'

import Header      from './Header.jsx'
import SocialLinks from './SocialLinks.jsx'
import Nav         from './Nav.jsx'
import Footer      from './Footer.jsx'

import '../styles/App.css'

function App() {
  return <BrowserRouter>
    <Header      />
    <SocialLinks />
    <Nav         />
    <Footer      />
  </BrowserRouter>
}

export default App
