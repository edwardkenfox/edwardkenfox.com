+++
date = "2017-03-05T22:26:14+09:00"
title = "Immediate autofocus"

+++

## Demo

<p id="original">Original content</p>
<input autofocus onfocus="setTimeout(function() { document.getElementById('original').innerHTML = `Orignial content has been replaced!` }, 1000)" style="margin-left: -9999px;">

## Code

~~~html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <p id="original">Original content</p>
    <input autofocus onfocus="setTimeout(function() { document.getElementById('original').innerHTML = `Orignial content has been replaced!` }, 1000)" style="margin-left: -9999px;">
  </body>
</html>
~~~
