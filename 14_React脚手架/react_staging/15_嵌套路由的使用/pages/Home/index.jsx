import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import News from './News'
import Message from './Message'

import MyNavLink from '../../components/MyNavLink'

export default class Home extends Component {
	render() {
		return (
			<div>
				<h3>我是首页内容</h3>
				<div>
					<ul class="nav nav-tabs">
						<li>
							{/* <a class="list-group-item" href="./home-news.html">
								News
							</a> */}
							<MyNavLink to="/home/news">新闻</MyNavLink>
						</li>
						<li>
							{/* <a class="list-group-item active" href="./home-message.html">
								Message
							</a> */}
							<MyNavLink to="/home/message">消息</MyNavLink>
						</li>
					</ul>
				</div>
				<div>
					<Switch>
						<Route path="/home/news" component={News} />
						<Route path="/home/message" component={Message} />
						<Redirect to="/home/news" />
					</Switch>
				</div>
			</div>
		)
	}
}
