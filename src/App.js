import './App.scss'
import { Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
import Layout from './components/Layout'
// import Portfolio from './components/Portfolio'
// import Dashboard from './components/Dashboard'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </>
  )
}

export default App
