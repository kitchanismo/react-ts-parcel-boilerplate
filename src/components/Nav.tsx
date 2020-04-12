import * as React from 'react'
import {User} from '../types'

export interface NavProps {
	user: User
	onAdd: Function
}

const Nav: React.SFC<NavProps> = ({user, onAdd}) => {
	return <h1>{user.username + onAdd(2, 5)}</h1>
}

export default Nav
