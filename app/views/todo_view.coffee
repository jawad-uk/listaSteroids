View = require './view'

module.exports = class TodoView extends View
  template: require './templates/todo'
  tagName: 'li'
  logging: on
  events:
    'click .check': 'toggleDone'
    'dblclick .todo-content': 'edit'
    'click .todo-destroy': 'clear'
    # 'click .todo-prioritize': 'prioritize'
    'keypress .todo-input': 'updateOnEnter'

  initialize: ->
    @model.bind 'change', @render
    @model.view = this

  render: ->
    generatedHTML = @template(@getRenderData()) 
    $log('rendering todo html', generatedHTML)
    @$el.html generatedHTML 
    @

  getRenderData: ->
    {
      todo: @model.toJSON()
    }

  afterRender: ->
    @$('.todo-input').bind 'blur', @update

  toggleDone: ->
    @model.toggle()

  edit: ->
    @$el.addClass 'editing'
    $('.todo-input').focus()

  update: =>
    @model.save content: @$('.todo-input').val()
    @$el.removeClass 'editing'

  updateOnEnter: (event) ->
    @update() if event.keyCode is 13

  remove: ->
    @$el.remove()

  clear: ->
    @model.clear()


  # prioritize: -> 
  #   # tbd
