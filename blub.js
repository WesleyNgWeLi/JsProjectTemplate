// const dragon = (name, size, element) => name + " is a " + size + " sized dragon that breathes " + element
// console.log(dragon('flufflykins', 'small', 'fire'))
let curDrag = 
		name =>
			size =>
				element => 
					name + " is a " + size + " sized dragon that breathes " + element 

console.log(curDrag('blubba')('medium')('water'))

var dragName = curDrag('badonkadonk')
var dragSize = dragName('large')
var dragElem = dragSize('potatoes')

console.log(dragElem)

export {curDrag}