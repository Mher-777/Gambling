import { config } from "../config";

var menu = {
    btn: $('.js-btn-menu'),
    menu: $('.js-menu'),

    toggle: () => {
        menu.btn.on('click', function (e) {
            const $this = $(this)
            e.preventDefault()
            $this.toggleClass('is-active')

            $(config.menu).fadeToggle()



        })
    },

    init: () => {
        menu.toggle()
    }
}

export { menu };