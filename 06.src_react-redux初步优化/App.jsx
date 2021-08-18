import React, { Component } from 'react'
// 引入Count的容器组件
import Count from './containers/Count'
// import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 渲染Count组件的容器组件，并给通过props给容器组件传递store */}
        {/* <Count store={store}/> */}
        <Count />
      </div>
    )
  }
}
