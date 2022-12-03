import React, { Component } from 'react'

import './index.css'

export default class Footer extends Component {
	// 复选框选中状态改变的回调
	handleChange = event => {
		this.props.changAllTodoDone(event.target.checked)
	}

	// 清除所有已完成
	handleClearAllDone = () => {
		this.props.clearAllDone()
	}

	render() {
		const { list } = this.props
		// 完成的数量
		const doneCount = list.reduce((pre, item) => pre + (item.done ? 1 : 0), 0)
		// 总数
		const total = list.length
		return (
			<div className="todo-footer">
				<label>
					<input
						type="checkbox"
						checked={total === doneCount && total !== 0}
						onChange={this.handleChange}
					/>
					<span>
						<span>已完成{doneCount}</span> / 全部{total}
					</span>
				</label>
				<button className="btn btn-danger" onClick={this.handleClearAllDone}>
					清除已完成任务
				</button>
			</div>
		)
	}
}
