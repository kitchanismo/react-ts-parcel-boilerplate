export type UserType = {
	uname: string
	pword: string
	address?: string
	id: number
}

export type TestType = {
	onAdd: (a: number, b: number) => number
	test: string
	user: UserType
	setUser: (user: UserType) => void
}
