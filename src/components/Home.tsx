import React, {useContext} from 'react'
import Nav from '#components/nav'
import {TestContext} from '../context'
import * as http from '../services/http'

export interface HomeProps {}

const Home: React.SFC<HomeProps> = props => {
	const {test, user, setUser} = useContext(TestContext)

	const getUser = () => http.get('teddlo', uname => setUser({...user, uname}))

	return (
		<>
			<Nav></Nav>
			<h1>{test}</h1>
			<button onClick={getUser}>click</button>
		</>
	)
}

//

export default Home
