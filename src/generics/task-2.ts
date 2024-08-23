console.log('Task 2')

type AllType = {
	name: string
	position: number
	color: string
	weight: number
}

function compare(
	top: Pick<AllType, 'name' | 'color'>,
	bottom: Pick<AllType, 'position' | 'weight'>
): AllType {
	return {
		name: top.name,
		color: top.color,
		position: bottom.position,
		weight: bottom.weight,
	}
}

const userTop = {
	name: 'Bob',
	color: 'Red',
}

const userBot = {
	position: 99,
	weight: 20,
}

console.log(compare(userTop, userBot))
