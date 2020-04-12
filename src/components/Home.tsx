import React, {useContext} from 'react'
import {User} from '../types'
import Nav from './Nav'
import {TestContext} from '../context'

export interface HomeProps {
	user: User
	onAdd: Function
	setUser: (user: User) => void
}

const Home: React.SFC<HomeProps> = ({user, setUser, ...props}) => {
	const test = useContext(TestContext)

	const _user: User = {
		...user,
		username: 'va,pindsdnskng'
	}

	return (
		<>
			<Nav user={user} {...props}></Nav>
			<h1>{test}</h1>
			<button onClick={() => setUser(_user)}>click</button>
		</>
	)
}

export default Home
