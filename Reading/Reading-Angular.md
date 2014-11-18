#MVC Model
######1
```
Model
```

* Models are the properties of the scope; scopes are attached to the DOM where scope properties are accessed through bindings.

######2
```
View
```

* The template (HTML with data bindings) that is rendered into the View.

######3
```
Controller
```

* The ngController directive specifies a Controller class; the class contains business logic behind the application to decorate the scope with functions and values

#Function
######1
```
angular.module
```

* Is a global place for creating, registering, and retrieving Angular modules. All modules that should be available to an application must be reistered using this mechanism.
* The module is a collection of services, directives, controllers, filters, and configuration information.

######2
```
angular.extend
```

* Extends the destination object by copying own enumerable properties from the src objects to the dst. 
* Can pass an empty object as dst to copy the src while preserving original objects.

######3
```
angular.copy
```

* Creates a deep copy of source, which should be an object or an array.

######4
```
angular.element
```

* Wraps a raw DOM element or HTML string as a jQuery element.
* If jQuery is available, angular.element is an alias for the jQuery function. 
* If jQuery isn't available, angular.elements defaults to angular's built-in subset of jQuery.

# Directive
######1
```
ngApp
```

* Use this directive to auto-bootstrap an AngularJS application. 
* ngApp designates the root element of the application and is typically placed near root elements (html or body)

######2
```
ngBind
```

* Tells Anuglar to replace the text content of the specified HTML element with the value of a given expression and to update the text content when the value of that expression changes.
* Typically you don't use ngBind directly but use {{ example }}

######3
```
ngClass
```

* Allows you to dynamically set CSS classes on an HTML element by databinding an expression that represents all classes to be added.

######4
```
ngClick
```

* Allows you to specify custom behavior when an element is clicked.

######5
```
ngController
```

* Attaches a controller class to the view.
* Contains business logic behind the application to decorate the scope with functions and values.

######6
```
ngDblclick
```

* The ngDblclick directive allows you to specify custom behavior on a dblclick event.

######7
```
ngForm
```

* Nestable alias of form directive. HTML does not allow nesting of form elements. It is useful to nest forms, for example if the validity of a sub-group of controls needs to be determined. 
* The purpose of ngForm is to group controls, but not to be a replacement for the form tag with all of its capabilities.

######8
```
ngKeyup
```

* Specify custom behavior on keyup event.

######9
```
ngModel
```

* This directive binds an input, select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive.

######10
```
ngRepeat
```

* This directive instantiates a template once per item from a collection. Each template instance gets its own scope, where the scope given loop variable is set to the current collection item, and $index is set to the item index or key.

######11
```
ngSubmit
```

* Enables binding Angular expressions to onsubmit events. 
* It also prevents the default action (which for form means sending the request to the server and reloading the current page), but only if the form doesn't contain action, data-action, or x-action attributes.

######12
```
form
```

* Use this directive to auto-bootstrap an AngularJS application. 
* ngApp designates the root element of the application and is typically placed near root elements (html or body)

######13
```
input
```

* Tells Anuglar to replace the text content of the specified HTML element with the value of a given expression and to update the text content when the value of that expression changes.
* Typically you don't use ngBind directly but use {{ example }}

######14
```
select
```

* Allows you to dynamically set CSS classes on an HTML element by databinding an expression that represents all classes to be added.

######15
```
textarea
```

* Allows you to specify custom behavior when an element is clicked.

######16
```
ngBlur
```

* Attaches a controller class to the view.
* Contains business logic behind the application to decorate the scope with functions and values.

######17
```
ngChange
```

* The ngDblclick directive allows you to specify custom behavior on a dblclick event.

######18
```
ngChecked
```

* Nestable alias of form directive. HTML does not allow nesting of form elements. It is useful to nest forms, for example if the validity of a sub-group of controls needs to be determined. 
* The purpose of ngForm is to group controls, but not to be a replacement for the form tag with all of its capabilities.

######19
```
ngKeyup
```

* Specify custom behavior on keyup event.

