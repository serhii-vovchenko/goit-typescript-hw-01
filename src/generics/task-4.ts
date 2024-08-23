console.log('Task 4')

type User = {
	name: string
	surname: string
	email: string
	password: string
}

function createOrUpdateUser(initialValues: Partial<User>): User {
	const defaultUser = {
		name: 'Mango',
		surname: 'Big',
		email: 'mango@gmail.com',
		password: '123456789',
	}

	return { ...defaultUser, ...initialValues }
}

createOrUpdateUser({
	email: 'user@mail.com',
	password: 'password123',
})

console.log(
	createOrUpdateUser({
		email: 'userUpdate@mail.com',
		password: 'newPassword123',
	})
)
