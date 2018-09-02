import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import {
  Form,
  Container,
  Grid,
  Segment,
  Message,
  Icon,
  Button,
} from 'semantic-ui-react'

import Header from './components/TopNav/'
import Dashboard from './components/Dashboard/'
import Inventory from './components/Inventory/'
import Content from './components/Content/'
import NotFound from './components/NotFound/'

import './styles.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Container style={{ marginTop: '6em' }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route
              exact
              path="/inventory/add"
              component={Inventory}
            />
            <Route exact path="/content" component={Content} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
