+++
date = "2017-03-18T16:05:01+09:00"
title = "Content Security Policy"

+++

I've modified my h2o to return the below CSP report-only header for accesses to this very page, which allows me to collect details of CSP violations without actually blocking the requests.

```plain
content-security-policy-report-only: default-src 'self'
  https://edwardkenfox.com
  https://*.edwardkenfox.com
  https://www.google-analytics.com;
  report-uri https://my-report-uri-endpoint
```

You can go open the browser console and see which requests and its violations are being reported. I did not include certain origins to the `content-security-policy-report-only` header such as `https://cdnjs.cloudflare.com` or `https://fonts.googleapis.com` and many others, which are being requested from the theme plug-in I'm using for the site. This is convenient since the header is `content-security-policy-report-only`, meaning that it does collect the violations without blocking the request itself and screw up the whole website, and reports it for me to the specified destination so that I can examine the details of the violation and decide my actual CSP policy to implement later on.
