'use strict'

class IndexController {

    index({view, request, response}) {
        return view.render('welcome')
    }
}

module.exports = HelloController
