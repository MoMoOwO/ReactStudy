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
								<Link to={`/home/message/details/${msgObj.id}/${msgObj.title}`}>
									{msgObj.title}
								</Link>
								&nbsp;&nbsp;
							</li>
						)
					})}
				</ul>
				<hr />
				<Route path="/home/message/details/:id/:title" component={Details} />
			</div>
		)
	}
}
