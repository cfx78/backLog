import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import OffCanvas from './OffCanvas'

test('renders react text', () => {
    render(
        <BrowserRouter>
            {' '}
            <OffCanvas />
        </BrowserRouter>
    )
    const h5 = screen.getByRole('heading', {
        level: 5,
    })
    expect(h5).toBeInTheDocument()
})
