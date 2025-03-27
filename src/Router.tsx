import { Routes, Route } from 'react-router-dom'

import GitHubRepos from './pages/GitHubRepos'
import Home from './pages'
import PdfList from './pages/Texts'
import GdeGato from './pages/GdeGato'

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}>
            <Route path='/' element={<GitHubRepos />} />
            <Route path='/docs' element={<PdfList />} />
            <Route path='/gdegato' element={<GdeGato />} />
            </Route>
        </Routes >
    )
}