// 创建 “外壳”组件 App
import React, { Component } from 'react'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

export default class App extends Component {
  // 初始化状态
  state = {
    todoList: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false },
      { id: '004', name: '逛街', done: true },
    ]
  }

  // 添加待办项
  addTodoItem = (todoItem) => {
    // 获取原状态
    const { todoList } = this.state
    // 更新状态
    this.setState({ todoList: [todoItem, ...todoList] })
  }

  // 更新待办项状态
  updateTodoItem = (id, done) => {
    // 获取原状态
    const { todoList } = this.state;
    // 获取新的状态
    const newList = todoList.map(item => {
      if (item.id === id) {
        return { ...item, done }
      } else {
        return item
      }
    })
    // 更新状态
    this.setState({ todoList: newList })
  }

  // 根据 id 删除对应项
  deleteTodoItem = (id) => {
    // 获取原状态
    const { todoList } = this.state;
    // 获取新的列表
    const newList = todoList.filter(item => {
      return item.id !== id
    })
    // 更新状态
    this.setState({ todoList: newList })
  }

  // 改变所有代办状态
  changAllTodoDone = (doneState) => {
    // 获取原始状态
    const { todoList } = this.state
    // 构造新增的状态
    const newList = todoList.map(item => {
      return { ...item, done: doneState }
    })
    // 更新状态
    this.setState({ todoList: newList })
  }

  // 清除所有已完成的项
  clearAllDone = () => {
    // 获取原装胎
    const { todoList } = this.state
    // 获取新的列表
    const newList = todoList.filter(item => {
      return !item.done
    })
    // 更新状态
    this.setState({ todoList: newList })
  }

  render() {
    const { todoList } = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodoItem={this.addTodoItem} />

          <List list={todoList} updateTodoItem={this.updateTodoItem} deleteTodoItem={this.deleteTodoItem} />

          <Footer list={todoList} changAllTodoDone={this.changAllTodoDone} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}
