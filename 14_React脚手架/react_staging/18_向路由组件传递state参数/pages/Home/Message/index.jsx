import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Details from './Details'

export default class Message extends Component {
	state = {
		messageArr: [
			{ id: '01', title: '消息1' },
			{ id: '02', title: '消息2' },
			{ id: '03', title: '消息3' }
		]
	}
	render() {
		const { messageArr } = this.state
		return (
			<div>
				<ul>
					{messageArr.map(msgObj => {
						return (
							<li key={msgObj.id}>
								{/* 向路由组件传递 params 参数 */}
								{/* <Link to={`/home/message/details/${msgObj.id}/${msgObj.title}`}>
									{msgObj.title}
								</Link> */}
								{/* 向路由组件传递 search参数 */}
								{/* <Link
									to={`/home/message/details/?id=${msgObj.id}&title=${msgObj.title}`}
								>
									{msgObj.title}
                </Link> */}
								{/* 想路由组件传递 state 参数 */}
								<Link
									to={{
										pathname: '/home/message/details',
										state: { id: msgObj.id, title: msgObj.title }
									}}
								>
									{msgObj.title}
								</Link>
								&nbsp;&nbsp;
							</li>
						)
					})}
				</ul>
				<hr />
				{/* 声明接受 params 传参 */}
				{/* <Route path="/home/message/details/:id/:title" component={Details} /> */}
				{/* search 参数无需声明接受，正常注册路由即可 */}
				{/* <Route path="/home/message/details" component={Details} /> */}
				{/* state 参数无需声明接受，正常注册路由即可 */}
				<Route path="/home/message/details" component={Details} />
			</div>
		)
	}
}
