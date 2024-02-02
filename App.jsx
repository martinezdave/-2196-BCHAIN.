import { useState } from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import './App.css'
import ChoreList from './components/ChoreList'
import BookList from './components/Booklist'
import MovieList from './components/MovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hello />
      <Welcome />
      <ChoreList />
      <BookList />
      <MovieList/>
    </>
  )
}

export default App
