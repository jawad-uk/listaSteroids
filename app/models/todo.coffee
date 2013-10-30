Model = require './model'

module.exports = class Todo extends Model
  defaults:
    content: ''
    done: no
    list: 'inbox'

  validate: (attrs) ->
    if attrs.content = ""
      "ما كتبت موضوع"

  toggle: ->
    @save done: not @get 'done'

  clear: ->
    @destroy()
    @view.remove()