import {expect, assert} from 'chai';
import {curDrag} from './blub';

describe('curDragon', ()=>{
    it('should return a string', ()=>{
        var result = curDrag('blubba')('medium')('water')
        expect(result).to.be.a('string');
    })

    it('should return correct response', ()=>{
        const result = curDrag('blubba')('medium')('water')
        const expectedResult = 'blubba is a medium sized dragon that breathes water'
        expect(result).to.eql(expectedResult)
    })
})

describe('curDragon1', ()=>{
    it('should return a string', ()=>{
        var dragName = curDrag('badonkadonk')
        var dragSize = dragName('large')
        var dragElem = dragSize('potatoes')
        var result = dragElem
        expect(result).to.be.a('string');
    })
    it('should return correct response', ()=>{
        var dragName = curDrag('badonkadonk')
        var dragSize = dragName('large')
        var dragElem = dragSize('potatoes')
        var result = dragElem
        const expectedResult = 'badonkadonk is a large sized dragon that breathes potatoes'
        expect(result).to.eql(expectedResult)
    })
})