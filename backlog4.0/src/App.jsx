import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

//*pages
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'
import Search from './pages/Search/Search'
import Results from './pages/Search/Results'
import { AuthProvider } from './assets/auth'

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="search" element={<Search />} />
                <Route path="results" element={<Results />} />
            </Route>
        )
    )

    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    )
}

export default App
