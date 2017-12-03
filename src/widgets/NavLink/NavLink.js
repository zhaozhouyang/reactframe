import React, {Component} from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import './NavLink.scss'

class NavLink extends Component{
  render() {
    return <RouterNavLink {...this.props} activeClassName="active"/>
  }
}

export default NavLink
