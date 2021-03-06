// Generated by CoffeeScript 1.6.3
var Model, Todo, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Model = require('./model');

module.exports = Todo = (function(_super) {
  __extends(Todo, _super);

  function Todo() {
    _ref = Todo.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Todo.prototype.defaults = {
    content: '',
    done: false,
    list: 'inbox'
  };

  Todo.prototype.validate = function(attrs) {
    if (attrs.content = "") {
      return "ما كتبت موضوع";
    }
  };

  Todo.prototype.toggle = function() {
    return this.save({
      done: !this.get('done')
    });
  };

  Todo.prototype.clear = function() {
    this.destroy();
    return this.view.remove();
  };

  return Todo;

})(Model);
