This is a repository that maintains the website [edwardkenfox.com](http://edwardkenfox.com)

### Build

```
git submodule update --init
docker build -t edwardkenfox.com .
```

### Build static pages

```
# inside /src
hugo
```

### Add new page

```
# inside /src
hugo new fixed/new-page.md
```

### Add new blog post

```
# inside /src
hugo new blog/your-new-post.md
```

### Run

```
docker run -p 80:80 edwardkenfox.com
```

## TODO

- [ ] HTTPS
- [ ] HTTP/2
- [ ] deploy to ECS
