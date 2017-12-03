import React, {Component} from 'react'

class Repo extends Component{
  render() {
    return (
      <div>
        <h2>{this.props.match.params.repoName}</h2>
      </div>
    )
  }
}

export default Repo
