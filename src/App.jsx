
import './App.css'
import Todos from './pages/Todos';
import AddToDo from './pages/AddToDo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const todoRouter = createBrowserRouter ([ 
  {path: '/', element: <Todos /> },
  {path: '/add', element: <AddToDo/>}
]);


function App() {
  return (
    <>
    <RouterProvider router={todoRouter}/>
    </>
  )
}

export default App
