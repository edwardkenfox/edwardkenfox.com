This is a repository that maintains the website [edwardkenfox.com](http://edwardkenfox.com)

### Build

```
docker build -t edwardkenfox.com .
```

### Build static pages

```
cd src
hugo --theme=cocoa
```

### Add new page

```
cd src
hugo new fixed/index.html
```

### Run

```
docker run -p 8080:8080 edwardkenfox.com
```

## TODO

- deploy
