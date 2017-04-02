+++
date = "2017-04-02T11:24:02+09:00"
title = "h2o mruby handler"

+++

With h2o it's dramatically easy to handle requests and responses using mruby module, meaning that you can directly generate response as well as manipulte the original one with ruby.
I am a ruby developer myself so this build-in support for mruby on h2o was pretty handy.

This is what I needed to add to my h2o.conf file,

```
/playground/h2o-mruby-handler/:
  mruby.handler-file: h2o-mruby-handler.rb
  file.dir: /app/public/playground/h2o-mruby-handler/
```

and here is the actual ruby file that adds an arbitrary header to the original response.

```ruby
Proc.new do |env|
  headers = {}
  headers["my-awesome-header"] = "foobar"

  [399, headers, []]
end
```

You can check the response header of this very page and you'll find `my-awesome-header` being added to the original response. Note the response header with status 399; when h2o sees this it'll pass the request to the next handler, which is convenient when you want to modify cache related haeders and so on.
