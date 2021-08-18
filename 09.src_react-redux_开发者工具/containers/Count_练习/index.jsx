import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'

class Count extends Component {
  increment = () => {
    const { value } = this.selectValue;
    this.props.add(value * 1)
  }

  decrement = () => {
    const { value } = this.selectValue;
    this.props.sub(value * 1)
  }
  incrementOdd = () => {
    const { value } = this.selectValue;
    if (this.props.count % 2 !== 0) {
      this.props.add(value * 1)
    }
  }
  asyncIncrement = () => {
    const { value } = this.selectValue;
    this.props.asyncAdd(value * 1, 500)
  }

  render() {
    return (
      <div>
        <h2>我是Count组件</h2>
        <h4>当前求和为：{this.props.count}</h4>
        <select ref={c => { this.selectValue = c }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementOdd}>奇数加</button>&nbsp;
        <button onClick={this.asyncIncrement}>异步加</button>
      </div>
    )
  }
}

export default connect(
  state => ({...state}), // 映射状态
  {//映射操作状态的方法
    add: createIncrementAction,
    sub: createDecrementAction,
    asyncAdd: createIncrementAsyncAction
  }
)(Count)


