import React, {Component} from 'react'
import {NavLink} from '~/src/widgets'
import { browserHistory } from 'react-router'
import { Route, withRouter } from 'react-router-dom'
import Repo from '../Repo/Repo'

class Repos extends Component{
  handleSubmit(event) {
    const {match} = this.props
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `${match.url}/${userName}/${repo}`
    this.props.history.push(path)
  }

  render () {
    const {match} = this.props
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to={`${match.url}/reactjs/react-router`}>React Router</NavLink></li>
          <li><NavLink to={`${match.url}/facebook/react`}>React</NavLink></li>
          <li>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        <Route path={`${match.path}/:userName/:repoName`} component={Repo}/>
      </div>
    )
  }
}

export default (Repos)
