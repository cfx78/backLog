import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Home from './Home'

test('renders react text', () => {
    render(
        <BrowserRouter>
            {' '}
            <Home />
        </BrowserRouter>
    )
    const smallElement = screen.getByText(/an account/i)
    expect(smallElement).toBeInTheDocument()
})
