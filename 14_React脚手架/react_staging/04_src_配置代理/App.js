// 创建 “外壳”组件 App
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  getStudentsData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      response => {
        console.log('学生信息');
        console.log(response.data);
      },
      error => {
        console.log(error);
      }
    )
  }
  getCarsData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      response => {
        console.log('车辆信息');
        console.log(response.data);
      },
      error => {
        console.log(error);
      }
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentsData}>点击获取数据</button>
        <button onClick={this.getCarsData}>点击获取数据</button>
      </div>
    )
  }
}
