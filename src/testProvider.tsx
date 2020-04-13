import * as React from 'react'
import {TestContext} from './context'
import {UserType} from '#types'

const TestProvider: React.FC = props => {
	const [user, setUser] = React.useState<UserType>({
		uname: 'kitchanxjcsjn',
		pword: 'dd',
		id: 1
	})

	const [test, setTest] = React.useState<string>('helllo world')

	const handleAdd = <T extends number>(num1: T, num2: T) => {
		return num1 + num2
	}

	return (
		<TestContext.Provider value={{test, user, onAdd: handleAdd, setUser}}>
			{props.children}
		</TestContext.Provider>
	)
}

export default TestProvider
