import React, { Component } from 'react'
// 引入store，用于获取redux中保存的状态
import store from '../../redux/store'
// 引入actionCreater，专门用于创建action对象
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

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
    const data = createIncrementAction(value * 1)
    // 通知redux更改状态
    store.dispatch(data)
  }

  // 减法
  decrementCount = () => {
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    const data = createDecrementAction(value * 1)
    // 通知redux更改状态
    store.dispatch(data)
  }

  // 奇数再加
  incrementCountIfOdd = () => {
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      const data = createIncrementAction(value * 1, 500)
      // 通知redux更改状态
      store.dispatch(data)
    }
  }

  // 异步相加
  incrementCountAsync = () => {
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    setTimeout(() => {
      const data = createIncrementAsyncAction(value * 1)
      // 通知redux更改状态
      store.dispatch(data)
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
