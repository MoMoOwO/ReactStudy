import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import './index.css'

export default class List extends Component {
	state = {
		userList: [], // 用户列表
		isFirst: true, // 是否首次进入界面
		isLoading: false, // 是否正在搜索
		err: '' // 搜索出错信息
	}

	componentDidMount() {
		// 订阅消息
		this.token = PubSub.subscribe('userData', (_, data) => {
			// 更新状态
			this.setState(data)
		})
	}

	componentWillUnmount() {
		// 取消订阅
		PubSub.unsubscribe(this.token)
	}

	render() {
		const { userList, isFirst, isLoading, err } = this.state
		return (
			<div className="row">
				{isFirst ? (
					<h1>欢迎使用，输入关键字，随后点击搜索</h1>
				) : isLoading ? (
					<h2>Loading...</h2>
				) : err ? (
					<h3 style={{ color: 'red' }}>{err}</h3>
				) : (
					userList.map(item => {
						return (
							<div key={item.id} className="card">
								<a href={item.html_url} target="_blank" rel="noreferrer">
									<img
										alt="avatar"
										src={item.avatar_url}
										style={{ width: '100px' }}
									/>
								</a>
								<p className="card-text">{item.login}</p>
							</div>
						)
					})
				)}
			</div>
		)
	}
}
