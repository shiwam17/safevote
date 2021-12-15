import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import getConfig from './config'
import Home from './components/Home';
import PollingStation from './components/PollingStation';
import NewPoll from './components/NewPoll'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
  return (<Router>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SafeVote</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='mx-auto my-auto' ></Nav>
          <Nav>
            <Nav.Link href='/NewPoll'>New Poll</Nav.Link>
            <Nav.Link onClick={window.accountId === '' ? login : logout}>
              {window.accountId === '' ? 'Login' : window.accountId}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/PollingStation" element={<PollingStation />} />
      <Route path="/NewPoll" element={<NewPoll />} />
    </Routes>
  </Router>)
}
