import * as React from 'react'
import {TestContext} from './context'

const TestProvider: React.FC = props => {
	const [test, setTest] = React.useState<string>('helllo world')
	return (
		<TestContext.Provider value={test}>{props.children}</TestContext.Provider>
	)
}

export default TestProvider
