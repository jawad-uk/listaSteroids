Router = require 'routers/router'

$ ->
	window.router = new Router()
	Backbone.history.start pushState: true