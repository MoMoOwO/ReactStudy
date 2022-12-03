import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default class Item extends Component {
	state = {
		isHover: false
	}
	// 对传递的 props 进行类型必要性限制
	static propTypes = {
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		done: PropTypes.bool.isRequired
	}

	// li 项鼠标移入移出处理函数
	handleHover(flag) {
		return () => {
			// 更新状态
			this.setState({ isHover: flag })
		}
	}

	// checkbox 选中状态改变
	handleChange(id) {
		return event => {
			this.props.updateTodoItem(id, event.target.checked)
		}
	}

	// 删除项点击
	handleDelete(id) {
		if (window.confirm('确定删除嘛？')) {
			this.props.deleteTodoItem(id)
		}
	}

	render() {
		const { id, name, done } = this.props
		const { isHover } = this.state
		return (
			<li
				style={{ backgroundColor: isHover ? '#ccc' : 'white' }}
				onMouseEnter={this.handleHover(true)}
				onMouseLeave={this.handleHover(false)}
			>
				<label>
					<input
						type="checkbox"
						checked={done}
						onChange={this.handleChange(id)}
					/>
					<span>{name}</span>
				</label>
				<button
					className="btn btn-danger"
					style={{ display: isHover ? 'block' : 'none' }}
					onClick={() => {
						this.handleDelete(id)
					}}
				>
					删除
				</button>
			</li>
		)
	}
}
