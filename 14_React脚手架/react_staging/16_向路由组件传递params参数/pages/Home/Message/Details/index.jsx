import React, { Component } from 'react'

const messageDetails = [
	{ id: '01', content: '你好，中国' },
	{ id: '02', content: '你好，山东' },
	{ id: '03', content: '你好，济南' }
]

export default class Details extends Component {
	render() {
		// 接受 params 参数（url 进行传参）
		const { id, title } = this.props.match.params
		const res = messageDetails.find(detailsObj => {
			return detailsObj.id === id
		})
		return (
			<ul>
				<li>ID：{id}</li>
				<li>TITLE：{title}</li>
				<li>CONTENT：{res.content}</li>
			</ul>
		)
	}
}
