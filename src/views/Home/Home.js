import React, {Component} from 'react'
import PropTypes from 'prop-types';
import img from './icon.png'
import './Home.scss'
import { connect } from 'react-redux'
import {api} from '~/src/api'

class Home extends Component{
  componentWillMount () {
    api('test')
  }

  render() {
    return (
      <div className='hello'>
        {'hello react jojo'}
        <img src={img} />
      </div>
    );
  }
}

Home.propTypes = {
  global: PropTypes.object.isRequired
}

const mapStateToProps = ({global}) => ({
  global
})

export default connect((mapStateToProps), {
})(Home)
