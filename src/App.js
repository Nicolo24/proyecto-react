import React, {useState, useEffect, useRef} from 'react';
import Table from 'react-bootstrap/Table'

import './App.css';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const [todos, setTodos] = useState()
  const checkboxRef = useRef();
  const fetchApi = async () => {
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }

  useEffect(() => {
    fetchApi()
  },[])

  return (
    <div className="App">
      <label>Only Pending</label>
      <input type="checkbox" onChange={fetchApi}/>
      <Table stripped bordered hover size="sm">
        <thead>
          <tr>
            <th>
              Index
            </th>
            <th>
              Task
            </th>
            <th>
              Done
            </th>
          </tr>
        </thead>
        <tbody>
          {
            !todos ? 'Cargando...':
            todos.map( (todo,index)=>{
              return (
                <tr>
                  <td>{index}</td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? '✓' : '✕'}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default App;
