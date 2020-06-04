import React from 'react';
import './App.css';
import './index.css';
import Button from 'react-bootstrap/Button';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';


const Home = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

const Menu = () => (
  <MemoryRouter>
    <Container >
      <Jumbotron>
        <h6>
          Current Page is{' '}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </h6>
        <h3>
           <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/">
              <Button>Home</Button>
            </LinkContainer>
            <LinkContainer to="/about">
              <Button>About</Button>
            </LinkContainer>
            <LinkContainer to="/users">
              <Button>Users</Button>
            </LinkContainer>
          </ButtonToolbar>
        </h3>
      </Jumbotron>
    </Container>
  </MemoryRouter>
);

export default Menu;