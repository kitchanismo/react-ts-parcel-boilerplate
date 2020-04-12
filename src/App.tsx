import * as React from 'react'
import {User} from './types'
import Home from './components/Home'
import TestProvider from './testProvider'

const App: React.FC = () => {
	const [user, setUser] = React.useState<User>({
		username: 'kitchan',
		password: 'dd',
		id: 1
	})

	const handleAdd = (num1: number, num2: number) => {
		return num1 + num2
	}

	const mult = (num1: number, num2: number) => {
		return num1 * num2
	}

	return (
		<TestProvider>
			<Home setUser={setUser} onAdd={handleAdd} user={user}></Home>
		</TestProvider>
	)
}

export default App
