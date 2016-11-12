var jQueryFallbackProvider = require('./utils/jQueryFallbackProvider')
var componentsHandler = require('./componentsHandler')


var onJQueryAvailable = ($) => {
	require('./plugins')
	componentsHandler({
		'questions': require('./components/questions'),
		'shapes': require('./components/shapes')
	})
}

var onJQueryMissing = () => {
	console.log('jQuery dependency is missing. This page might not work correctly. Please try again later.')
}


jQueryFallbackProvider(
	'/node_modules/jquery/dist/jquery.min.js',
	onJQueryAvailable,
	onJQueryMissing
)
