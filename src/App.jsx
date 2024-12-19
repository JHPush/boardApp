import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ArticleList from './components/ArticleList'
import ArticleView from './components/ArticleView'
import ArticleWrite from './components/ArticleWrite'
import ArticleModify from './components/ArticleModify'

const App = () => {

  return (
    <>
      <div>
        <Link to='/'> <span> [게시글 조회] </span></Link>
        <Link to='/writer'> <span> [게시글 쓰기] </span> </Link>

      </div>
      <Routes>
        <Route path='/' element={<ArticleList />} />
        <Route path='/list' element={<ArticleList />} />
        <Route path='/writer' element={<ArticleWrite />} />
        <Route path='/view/:id' element={<ArticleView />} />
        <Route path='/modify/:id' element={<ArticleModify />} />
      </Routes>
    </>
  )
}

export default App
