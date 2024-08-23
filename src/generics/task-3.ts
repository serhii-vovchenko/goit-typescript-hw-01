console.log('Task 3')

function merge<A extends Object, B extends Object>(objA: A, objB: B): A | B {
	return Object.assign(objA, objB)
}

console.log(merge({ name: 'Mango', age: 29 }, { isActive: true, isWork: null }))
