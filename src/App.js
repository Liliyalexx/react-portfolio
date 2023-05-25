import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import Layout from './components/Layout';

import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='/' exact element={<HomePage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
