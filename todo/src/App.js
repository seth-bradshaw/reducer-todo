import React, {useReducer} from 'react'
import reducer from './reducers'
import actions from './actions'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const initialList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

function App() {
  const [state, dispatch] = useReducer(reducer, initialList)

  const handleToggleItem = (itemId) =>{
    dispatch(actions.setToggle(itemId))
  }
  
  const handleAddItem = (task) => {
    dispatch(actions.addTask(task))
  }

  const clearList = () => {
    dispatch(actions.clear())
  }

  return (
    <div className='app'>
      <TodoList handleToggleItem={handleToggleItem} initialList={state} />
      <TodoForm handleAddItem={handleAddItem} clearList={clearList} />
    </div>
  );
}

export default App;
