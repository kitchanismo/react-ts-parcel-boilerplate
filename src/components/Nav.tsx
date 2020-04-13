import * as React from 'react'
import {TestContext} from '../context'

export interface NavProps {}

const Nav: React.SFC<NavProps> = props => {
	const {onAdd, user} = React.useContext(TestContext)
	return <h1>{user.uname + onAdd(2, 9)}</h1>
}

export default Nav
