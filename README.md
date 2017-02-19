This is a repository that maintains the website [edwardkenfox.com](http://edwardkenfox.com)

### Build

```
# inside edwardkenfox.com
git submodule update --init
docker build -t edwardkenfox.com .
```

### Build static pages

```
# inside src
hugo
```

### Add new page

```
# inside src
hugo new fixed/index.md
```

### Run

```
docker run -p 80:80 edwardkenfox.com
```

## TODO

- deploy
