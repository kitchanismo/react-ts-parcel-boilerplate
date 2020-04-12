import * as React from 'react'
import {User} from '../types'
import Nav from './Nav'

export interface HomeProps {
	user: User
	onAdd: Function
	setUser: Function
}

const Home: React.SFC<HomeProps> = props => {
	return (
		<>
			<Nav {...props}></Nav>
			<button onClick={() => props.setUser({username: 'fdccf'})}>click</button>
		</>
	)
}

export default Home
