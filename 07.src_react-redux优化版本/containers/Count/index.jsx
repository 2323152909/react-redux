import React, { Component } from 'react'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'

// 定义UI组件
class Count extends Component {
  state = { carName: "奔驰" }


  // 加法
  incrementCount = () => {
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    this.props.jia(value * 1)
  }

  // 减法
  decrementCount = () => {
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    this.props.jian(value * 1)
  }

  // 奇数再加
  incrementCountIfOdd = () => {
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1)
    }
  }

  // 异步相加
  incrementCountAsync = () => {
    // 解构赋值获取到select上所选的值
    const { value } = this.selectNumber;
    this.props.asyncJia(value * 1, 500)
  }

  render() {
    // console.log('UI组件收到的props是：',this.props);
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
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

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  // 映射状态
  state => ({ count: state }),

  // 映射操作状态的方法
  // mapDispatchToProps的一般用法
  /* dispatch => ({
    jia: data => dispatch(createIncrementAction(data)),
    jian: (data) => dispatch(createDecrementAction(data)),
    asyncJia: (data, time) => dispatch(createIncrementAsyncAction(data, time))
  }) */

  // mapDispatchToProps的简写
  {
    jia:createIncrementAction,
    jian:createDecrementAction,
    asyncJia:createIncrementAsyncAction
  }

)(Count)
