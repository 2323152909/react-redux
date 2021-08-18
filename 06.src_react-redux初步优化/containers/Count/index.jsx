// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'

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

)(CountUI)
