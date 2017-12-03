import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './views'
import store from './store'
import DevTools from '~/build/DevTools';

render((
	<Provider store={store}>
		<div>
			<BrowserRouter>
				<Route path='/' component={App} />
			</BrowserRouter>
			{process.env.NODE_ENV !== 'production' && <DevTools />}
		</div>
		
	</Provider>
), document.getElementById('app'))
