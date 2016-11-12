var Component = require('./component')
var $ = window.jQuery

/**
 * Example component class
 *
 * - all DOM operations must be executed after creating an instance (in constructor)
 * - when defining own constructor, don't forget to call super(element, data)
 * - DOM event listeners are in Backbone style
 *
 */
module.exports = class Questions extends Component {

	constructor(el, data) {
		super(el, data)

		$('.table-item').on('click', function (e) {
			e.preventDefault()
			if ($(this).hasClass('disable')) {
				$(this).removeClass('disable')
			} else {
				$(this).addClass('disable')
				$(this).find('.table-question').toggleClass('show')
			}
		})
	}
}
