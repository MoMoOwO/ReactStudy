import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About' // 路由组件

import Header from './components/Header' // 一般组件
import MyNavLink from './components/MyNavLink'

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

              <MyNavLink to="/home">首页</MyNavLink>
              <MyNavLink to="/about/a/b">关于</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/about" component={About} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
