import TestProvider from './testProvider'

import React from 'react'

import Home from '#components/Home'

const App: React.FC = () => {
	return (
		<TestProvider>
			<Home></Home>
		</TestProvider>
	)
}

export default App
