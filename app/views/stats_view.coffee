View = require './view'
template = require './templates/stats'
  
module.exports = class StatsView extends View
  logging: on
  template: template
  id: 'stats-view'
  events:
    'click .todo-clear' : 'clearCompleted'

  initialize: ->
    @collection.bind 'reset', @render, @

  render: ->


  getRenderData: ->
    {
      stats:
        total: @collection.length
        done: @collection.done().length
        remaining: @collection.remaining().length
    }

  clearCompleted: ->
    @collection.clearCompleted()

