import { getBadgeColor } from './Card'
import { describe, it, expect } from 'vitest'

describe('#getBadgeColor', () => {
    it('should return `text-bg-success` ', () => {
        expect(getBadgeColor(85)).toEqual('text-bg-success')
    })
})
