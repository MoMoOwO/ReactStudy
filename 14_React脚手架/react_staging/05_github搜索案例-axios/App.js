import React, { Component } from 'react'

import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state = {
    userList: [], // 用户列表
    isFirst: true, // 是否首次进入界面
    isLoading: false, // 是否正在搜索
    err: '' // 搜索出错信息
  }
  // 搜索后更新用户列表
  setUserList = (userList) => {
    this.setState({ userList })
  }
  // 更新 app 状态
  updateAppState = (newSate) => {
    this.setState(newSate)
  }
  render() {
    return (
      <div className="container">
        <Search setUserList={this.setUserList} updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
