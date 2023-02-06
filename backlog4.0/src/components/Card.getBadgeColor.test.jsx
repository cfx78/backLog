import { getBadgeColor } from './Card'
import { describe, it, expect } from 'vitest'

describe('#getBadgeColor', () => {
    it('should return `text-bg-success` ', () => {
        expect(getBadgeColor(85)).toEqual('text-bg-success')
    })
    it('should return `text-bg-danger` ', () => {
        expect(getBadgeColor(41)).toEqual('text-bg-danger')
    })
    it('should return `text-bg-warning` ', () => {
        expect(getBadgeColor(72)).toEqual('text-bg-warning')
    })
})
