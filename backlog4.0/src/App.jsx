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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="search" element={<Search />} />
        </Route>
    )
)

function App() {
    return <RouterProvider router={router} />
}

export default App
