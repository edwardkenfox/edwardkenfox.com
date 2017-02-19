This is a repository that maintains the website [edwardkenfox.com](http://edwardkenfox.com)

### Build

```
git submodule update --init

# manually upload SSL certificate & key before building image

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
docker run -p 80:80 -p 443:443 edwardkenfox.com
```

## TODO

- [x] HTTPS
- [x] HTTP/2
- [ ] deploy to ECS
