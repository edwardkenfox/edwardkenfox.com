+++
date = "2017-03-05T12:24:05+09:00"
title = "DOM Based XSS"

+++

## Demo

<p>Open <a href="//edwardkenfox.com/playground/dom-based-xss/index.html?id=1%27);eval(String.fromCharCode(97,108,101,114,116,40,39,98,111,111,33,39,41,59))//">this link</a> to show an alert via DOM Based XSS</p>


<script type="text/javascript">
  function getId(id) {
    console.log('id: ' + id);
  }

  var url = window.location.href;
  var pos = url.indexOf("id=")+3;
  var len = url.length;
  var id = url.substring(pos, len);

  eval('getId(' + id.toString() + ')');
</script>

## Code

```html
<p>Open <a href="//edwardkenfox.com/playground/dom-based-xss/index.html?id=1%27);eval(String.fromCharCode(97,108,101,114,116,40,39,98,111,111,33,39,41,59))//">this link</a> to show an alert via DOM Based XSS</p>


<script type="text/javascript">
  function getId(id) {
    console.log('id: ' + id);
  }

  var url = window.location.href;
  var pos = url.indexOf("id=")+3;
  var len = url.length;
  var id = url.substring(pos, len);

  eval('getId(' + id.toString() + ')');
</script>
```
