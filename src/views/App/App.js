import React, {Component} from 'react'
import {NavLink} from '~/src/widgets'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Repos from '../Repos/Repos'
import {Button} from 'antd'

class App extends Component{
  render() {
    const {match} = this.props
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to={`/`} exact>Home</NavLink></li>
          <li><NavLink to={`/about`}>About</NavLink></li>
          <li><NavLink to={`/repos`}>Repos</NavLink></li>
        </ul>
        <Button type='primary'>jojoAntd</Button>
        <Switch>
          <Route path={`/`} exact component={Home} />
          <Route path={`/about`} component={About}/>
          <Route path={`/repos`} component={Repos}/>
          <Redirect to='/' />
        </Switch>
      </div>
    )
  }
}

export default App
