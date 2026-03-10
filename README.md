This is a repository that maintains the website [edwardkenfox.com](https://edwardkenfox.com)

## Stack

- **Static site generator:** [Hugo](https://gohugo.io/)
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **DNS & SSL:** [Cloudflare](https://www.cloudflare.com/)

## Local development

```
git submodule update --init
cd src
hugo server
```

### Build static pages

```
cd src
hugo
```

### Add new blog post

```
cd src
hugo new blog/your-new-post.md
```

### Add new page

```
cd src
hugo new fixed/new-page.md
```

## Deployment

Deployment is automatic via Cloudflare Pages on push to `master`.

### Cloudflare Pages build settings

| Setting | Value |
|---------|-------|
| Root directory | `src` |
| Build command | `hugo` |
| Output directory | `public` |
| Environment variable | `HUGO_VERSION` = `0.157.0` |
