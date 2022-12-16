import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log('About', this.props);
    return (
      <div>
        <h3>我是关于页内容</h3>
      </div>
    )
  }
}
