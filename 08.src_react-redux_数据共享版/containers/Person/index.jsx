import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddPerson } from '../../redux/actions/person'
import { nanoid } from 'nanoid'

class Person extends Component {
  addPerson = () => {
    const { nameNode: { value: name }, ageNode: { value: age } } = this;
    const personObj = { id: nanoid(), name, age }
    console.log(personObj);
    this.props.addPerson(personObj);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>我是Person组件，上方组件求和为：{this.props.count}</h2>
        <input ref={c => { this.nameNode = c }} type="text" placeholder="输入名字" />
        <input ref={c => { this.ageNode = c }} type="text" placeholder="输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul style={{ listStyle: "none" }}>
          {
            this.props.persons.map(person => {
              return (
                <li key={person.id}>姓名：{person.name}---年龄：{person.age}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ ...state }),
  {
    addPerson: createAddPerson
  }
)(Person)
