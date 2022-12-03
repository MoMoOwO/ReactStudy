import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

import Item from '../Item'

export default class List extends Component {
	// 对接受的 props 进行类型、必要性的限制
	static propTypes = {
		list: PropTypes.array.isRequired,
		updateTodoItem: PropTypes.func.isRequired,
		deleteTodoItem: PropTypes.func.isRequired
	}
	render() {
		const { list, updateTodoItem, deleteTodoItem } = this.props
		return (
			<ul className="todo-main">
				{list.map(item => {
					return (
						<Item
							key={item.id}
							{...item}
							updateTodoItem={updateTodoItem}
							deleteTodoItem={deleteTodoItem}
						/>
					)
				})}
			</ul>
		)
	}
}
