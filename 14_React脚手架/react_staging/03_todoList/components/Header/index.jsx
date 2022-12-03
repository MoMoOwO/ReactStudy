import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

import './index.css'

export default class Header extends Component {
	addTodo = event => {
		// 获取 target 与 keyCode
		const { target, keyCode } = event
		// 不是回车直接返回
		if (keyCode !== 13) return
		// 非空
		if (target.value.trim() === '') {
			alert('输入不能为空！')
			target.value = null
			return
		}
		// 构造 todoItem
		const todoItem = { id: nanoid(), name: target.value, done: false }
		// 调用父组件传递的方法传递给父组件
		this.props.addTodoItem(todoItem)
		target.value = null
	}

	static propTypes = {
		addTodoItem: PropTypes.func.isRequired
	}

	render() {
		return (
			<div className="todo-header">
				<input
					type="text"
					placeholder="请输入你的任务名称，按回车确认"
					onKeyUp={this.addTodo}
				/>
			</div>
		)
	}
}
