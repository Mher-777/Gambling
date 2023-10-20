var defaults = {

	events: () => {
		$('.js-hamburger').on('click', function () {
			$(this).toggleClass('hamburger_open');
		  });
	},

	init: () => {

		defaults.events();

	}
}

export { defaults }