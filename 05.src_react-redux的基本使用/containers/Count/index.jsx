// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'

/* 
    1.mapStateToProps函数返回的是一个对象；
    2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
    3.mapStateToProps用于传递状态
*/
function mapStateToProps(state) {
  return { count: state }
}

/* 
    1.mapDispatchToProps函数返回的是一个对象；
    2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value----操作方法
    3.mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch) {
  return {
    jia: (data) => {
      // 通知redux执行加法
      dispatch(createIncrementAction(data))
    },
    jian: (data) => {
      // 通知redux执行减法
      dispatch(createDecrementAction(data))
    },
    asyncJia: (data) => {
      // 通知redux执行减法
      dispatch(createIncrementAsyncAction(data, 500))
    }
  }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
