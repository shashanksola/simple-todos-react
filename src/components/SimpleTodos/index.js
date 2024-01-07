import './index.css'

import {Component} from 'react'

import TodoItem from '../TodoItem'

// Write your code here

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {usersTodoList: initialTodosList}

  deleteUser = id => {
    const {usersTodoList} = this.state
    const newUsersTodoList = usersTodoList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({usersTodoList: newUsersTodoList})
  }

  render() {
    const {usersTodoList} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1>Simple Todos</h1>
          <ul className="todo-container">
            {usersTodoList.map(eachUser => (
              <TodoItem
                key={eachUser.id}
                id={eachUser.id}
                title={eachUser.title}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
