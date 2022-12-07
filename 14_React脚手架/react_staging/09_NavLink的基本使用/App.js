import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About' // 路由组件

import Header from './components/Header' // 一般组件

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生 html 中带 <a> 标签跳转不同页面 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              {/* 在 react 中靠路由连接实现切换组件 */}

              <NavLink activeClassName='nav-active' className="list-group-item" to="/home">Home</NavLink>
              <NavLink activeClassName='nav-active' className="list-group-item" to="/about">About</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
