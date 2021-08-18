import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render( < App / > , document.getElementById("root"))

// 检测redux中状态的干煸，如redux的状态发生了改变，那么重新渲染App组件(diff算法)
store.subscribe(() => {
  ReactDOM.render( < App / > , document.getElementById("root"))
})