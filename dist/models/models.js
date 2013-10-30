(function() {
  var Collection, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = Collection = (function(_super) {
    __extends(Collection, _super);

    function Collection() {
      _ref = Collection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Collection.prototype.model = require('./model');

    return Collection;

  })(Backbone.Collection);

}).call(this);


(function() {
  var Model, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = Model = (function(_super) {
    __extends(Model, _super);

    function Model() {
      _ref = Model.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return Model;

  })(Backbone.Model);

}).call(this);


(function() {
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

}).call(this);


(function() {
  var Collection, Todo, Todos, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Collection = require('./collection');

  Todo = require('models/todo');

  module.exports = Todos = (function(_super) {
    __extends(Todos, _super);

    function Todos() {
      _ref = Todos.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Todos.prototype.model = Todo;

    Todos.prototype.initialize = function() {
      return this.localStorage = new Store('todos');
    };

    Todos.prototype.done = function() {
      return this.filter(function(todo) {
        return todo.get('done');
      });
    };

    Todos.prototype.remaining = function() {
      return this.without.apply(this, this.done());
    };

    Todos.prototype.nextOrder = function() {
      if (!this.length) {
        return 1;
      }
      return this.last().get('order') + 1;
    };

    Todos.prototype.comparator = function(todo) {
      return todo.get('order');
    };

    Todos.prototype.clearCompleted = function() {
      return _.each(this.done(), function(todo) {
        return todo.clear();
      });
    };

    return Todos;

  })(Collection);

}).call(this);
