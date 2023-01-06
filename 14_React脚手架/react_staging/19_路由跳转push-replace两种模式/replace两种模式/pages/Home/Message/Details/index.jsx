import React, { Component } from 'react'
// import qs from 'querystringify'

const messageDetails = [
	{ id: '01', content: '你好，中国' },
	{ id: '02', content: '你好，山东' },
	{ id: '03', content: '你好，济南' }
]

export default class Details extends Component {
	render() {
		console.log(this.props)
		// 接受 params 参数（url 进行传参）
		/* const { id, title } = this.props.match.params */

		// 接受 search 参数
		/* const { search } = this.props.location
		const { id, title } = qs.parse(search.slice(1)) */

		// 接受 state 参数
		const { id, title } = this.props.location.state
		const res =
			messageDetails.find(detailsObj => {
				return detailsObj.id === id
			}) || {}
		return (
			<ul>
				<li>ID：{id}</li>
				<li>TITLE：{title}</li>
				<li>CONTENT：{res.content}</li>
			</ul>
		)
	}
}
