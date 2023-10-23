import { Routes, Route } from 'react-router-dom'

import GitHubRepos from './pages/GitHubRepos'
import Home from './pages'

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}>
            <Route path='/' element={<GitHubRepos />} />
            </Route>
        </Routes >
    )
}