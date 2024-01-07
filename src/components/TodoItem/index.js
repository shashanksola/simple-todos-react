// Write your code here
import './index.css'

const TodoItem = props => {
  const {id, title, deleteUser} = props

  const deleteTodo = () => {
    deleteUser(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button onClick={deleteTodo} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
