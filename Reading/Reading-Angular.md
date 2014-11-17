```javascript
angular.module('name of module', [ ], function() {
  alert('Hello Todos');
});
```

```html
<body ng-app="todomvc"> (everything underneath this will be affected by angular)
<li ng-repeat="task in [{ text: 'thing 1' }, { text: 'thing 2' }]""
  ng-class="{ completed: task.completed }">
<label>{{ task }}</label>
```
