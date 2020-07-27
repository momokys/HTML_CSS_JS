const menu = {
    duration: 300,
    last: null,
    toggle: function (e) {
        let itemBox = null
        let current =  $(e.target)
        let clicked = false
        if (current.hasClass('label')) {
            if (this.last !== null) {
                itemBox = this.last.next()
                if (itemBox) {
                    itemBox.slideUp(this.duration)
                }
                clicked = current.hasClass('item-active')
                this.last.removeClass('item-active')
                if (!clicked) {
                    current.addClass('item-active')
                }
            } else {
                current.addClass('item-active')
            }
            itemBox = current.next()
            if (itemBox && !clicked) {
                itemBox.slideDown(this.duration)
            }
            this.last = current
        } else {
            current.siblings().removeClass('item-active')
            current.toggleClass('item-active')
        }
    },
    init: function () {
        $('.menu>.item>.label').click(function (e) {
            menu.toggle(e)
        })
        $('.menu>.item>.item-box>.item').click(function (e) {
            menu.toggle(e)
        })
    }
}
$(function () {
    menu.init()
})