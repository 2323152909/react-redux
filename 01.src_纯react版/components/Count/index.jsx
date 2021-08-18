import React, { Component } from 'react'

export default class Count extends Component {
  state = { count: 0 }

  // 加法
  incrementCount = () => {
    const { count } = this.state;
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    this.setState({
      count: count + parseInt(value)
    })
  }

  // 减法
  decrementCount = () => {
    // 获取到原本的count值
    const { count } = this.state;
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    this.setState({
      count: count - parseInt(value)
    })
  }

  // 奇数再加
  incrementCountIfOdd = () => {
    const { count } = this.state;
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    if (count % 2 !== 0) {
      this.setState({
        count: count + parseInt(value)
      })
    }
  }

  // 异步相加
  incrementCountAsync = () => {
    const { count } = this.state;
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    setTimeout(() => {
      this.setState({
        count: count + parseInt(value)
      })
    }, 1000)
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>当前求和为：{count}</h1>
        <select ref={c => { this.selectNumber = c }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.incrementCount}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrementCount}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementCountIfOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;
        <button onClick={this.incrementCountAsync}>异步相加</button>
      </div>
    )
  }
}
