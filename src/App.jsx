import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo'
import { Provider } from 'react-redux'
import { store } from './App/store'
import Todos from './Components/Todos'

function App() {

  return (
    <Provider store={store}>

      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
