import React, { Component } from 'react'
// 引入store，用于获取redux中保存的状态
import store from '../../redux/store'

export default class Count extends Component {
  state = { count: 0 }

  /* componentDidMount() {
    // 检测redux中状态的变化，只要变化，就调用redux
    store.subscribe(() => {
      console.log(this);
      this.setState({})
    });
  } */

  // 加法
  incrementCount = () => {
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    // 通知redux更改状态
    store.dispatch({ type: 'increment', data: value * 1 })
  }

  // 减法
  decrementCount = () => {
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    // 通知redux更改状态
    store.dispatch({ type: 'decrement', data: value * 1 })
  }

  // 奇数再加
  incrementCountIfOdd = () => {
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      // 通知redux更改状态
      store.dispatch({ type: 'increment', data: value * 1 })
    }
  }

  // 异步相加
  incrementCountAsync = () => {
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    setTimeout(() => {
      // 通知redux更改状态
      store.dispatch({ type: 'increment', data: value * 1 })
    }, 500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
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
