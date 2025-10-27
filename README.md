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
docker run -d -p 80:80 -p 443:443 edwardkenfox.com
```

## TODO

- [x] HTTPS
- [x] HTTP/2
- [ ] deploy to ECS

## SSL cert update

- get new ssl
- download domain control valdation file
- comment our h2o.conf to work only as http and add the domain control validation file to the designation location
- build and deploy docker container to edwardkenfox.com host
- proceed with DCL on SSL.com
- download cert file and add to this repo
- revert comments in h2o.conf
- build and deploy docker container to edwardkenfox.com host

## Deployment

Local

```
# ECR login
docker build -t edwardekenfox.com/base .
docker tag edwardekenfox.com/base:latest 572527407074.dkr.ecr.ap-northeast-1.amazonaws.com/edwardekenfox.com/base:latest
docker push 572527407074.dkr.ecr.ap-northeast-1.amazonaws.com/edwardekenfox.com/base:latest
```

Login to EC2

```
ssh -i ~/.ssh/YOUR_KEY USER@edwardkenfox.com
```

Inside EC2

```
# ECR login
docker pull 572527407074.dkr.ecr.ap-northeast-1.amazonaws.com/edwardekenfox.com/base:latest --platform linux/arm64
docker run -d -p 443:443 IMAGE_ID
```
