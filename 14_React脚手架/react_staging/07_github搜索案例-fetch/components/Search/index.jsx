import React, { Component } from 'react'
import PubSub from 'pubsub-js'

// import axios from 'axios'

export default class Search extends Component {
	handleSearch = async () => {
		// 解构赋值拿到输入值
		const {
			keywordEl: { value }
		} = this

		// 点击搜索更新状态
		// this.props.updateAppState({ isFirst: false, isLoading: true })
		PubSub.publishSync('userData', { isFirst: false, isLoading: true })

		// 请求获取用户数据
		// axios
		/* axios.get('/api/search/users?q=' + value).then(
			res => {
				// console.log(res.data)
				// this.props.setUserList(res.data.items)
				// 更新 app 状态
				// this.props.updateAppState({ isLoading: false })
				PubSub.publishSync('userData', {
					userList: res.data.items,
					isLoading: false
				})
			},
			err => {
				// this.props.updateAppState({ isLoading: false, err: err.message })
				PubSub.publishSync('userData', { isLoading: false, err: err.message })
			}
		) */

		// fetch  -- 未优化
		/* fetch('/api/search/users?q=' + value)
			.then(
				response => {
					console.log('联系服务器成功了！')
					return response.json()
				},
				error => {
					console.log('联系服务器失败了！', error)
					return new Promise() // 连接不上服务器直接终止
				}
			)
			.then(
				response => {
					console.log('获取数据成功！', response)
				},
				error => {
					console.log('获取数据失败！', error)
				}
			) */

		// 优化后
		/* fetch('/api/search/users?q=' + value)
			.then(response => {
				console.log('联系服务器成功了！')
				return response.json()
			})
			.then(response => {
				console.log('获取数据成功！', response)
			})
			.catch(error => {
				console.log('请求出错', error)
			}) */

		// 再优化
		try {
			const response = await fetch('/api/search/users?q=' + value)
			const { items: userList } = await response.json()
			PubSub.publishSync('userData', { isLoading: false, userList })
		} catch (error) {
			console.log('请求出错', error)
		}
	}
	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索 Github 用户</h3>
				<div>
					<input
						ref={c => (this.keywordEl = c)}
						type="text"
						placeholder="输入关键字点击搜索"
					/>
					&nbsp;<button onClick={this.handleSearch}>搜索</button>
				</div>
			</section>
		)
	}
}
