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
				$(this).find('.table-question').addClass('show')
			}
		})

		$('.table-question').on('click', function (e) {
			e.stopPropagation()
			$(this).removeClass('show')

		})

		$('.table-button').on('click', function (e) {
			e.preventDefault()
			var value = parseInt($(this).closest('.table-item').find('.value').text())

			if ($(this).hasClass('one')) {

				$('#one').attr('value', parseInt($('#one').attr('value')) + value);

			} else if ($(this).hasClass('two')) {

				$('#two').attr('value', parseInt($('#two').attr('value')) + value);

			} else if ($(this).hasClass('three')) {

				$('#three').attr('value', parseInt($('#three').attr('value')) + value);

			}

			$('.table-question').removeClass('show')
		})
	}
}
