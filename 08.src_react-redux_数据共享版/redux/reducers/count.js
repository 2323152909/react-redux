/* 
    1.该文件是应用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
    2.reducer函数会接到两个参数，分别为：之前的状态(previousState)，动作对象(action)
*/
  import { INCREMENT, DECREMENT } from '../constant'

// 初始化状态
const initState = 0
export default function countReducer(preState = initState, action) {
  // console.log(preState, action);
  // 从action对象中获取：type，data
  const { type, data } = action;
  // 根据type决定如何加工数据
  switch (type) {
    // 如果是加
    case INCREMENT:
      return preState + data;
    // 如果是减
    case DECREMENT:
      return preState - data;
    // 都不是
    default:
      return preState;
  }
}