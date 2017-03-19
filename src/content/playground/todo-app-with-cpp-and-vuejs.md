+++
date = "2017-03-19T22:16:38+09:00"
title = "ToDo App with C++ & Vue.js"
url = "/playground/todo-app-with-cpp-and-vuejs"
slug = "todo-app-with-cpp-and-vuejs"

+++

The below minimal ToDo app is created using C++ ToDo class compiled to JavaScript with emscripten and then bound to Vue.js as a component. The original C++ class was a file of 45 lines, but the compiled JavaScript file became +400KB. Each item of the ToDo list is a ToDo class instance written in C++ and has full functionality of a C++ classes such as type information of the member attributes as well as function parameters, which can be really useful even in the JavaScript world. However, this is still highly experimental concerning the bloated file size, and also the bug/behavior that the ToDo Vue component's properties not being reactive which is critical for virtual DOM UI library.

You can see the code from [edwardkenfox/vue-emscripten-todo](https://github.com/edwardkenfox/vue-emscripten-todo/).

## Demo

<style type="text/css">
  section.main .content .markdown li {
    list-style-position: initial;
  }

  #app {
    background-color: #eee;
    padding: 100px 50px;
  }
</style>

<div id="app">
  <app ref="app"></app>
</div>
<script src="/static/todo-app-with-cpp-and-vuejs/todo.js"></script>
<script src="/static/todo-app-with-cpp-and-vuejs/app.js"></script>
