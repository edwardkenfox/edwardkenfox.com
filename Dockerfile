FROM lkwg82/h2o-http2-server

#
# install necessary packages
#
RUN apk update && apk upgrade
RUN apk add \
    wget \
    git \
    openssl \
    vim

# #
# # setup hugo
# #
ENV HUGO_VERSION=0.18.1
RUN cd /tmp/ && \
    wget https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    tar xzf hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    rm -r hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    mv hugo*/hugo* /usr/bin/hugo

# #
# # setup h2o
# #
WORKDIR /etc/h2o
COPY h2o.conf /etc/h2o/h2o.conf
COPY STAR_edwardkenfox_com.crt /etc/h2o/STAR_edwardkenfox_com.crt
COPY edwardkenfoxcom.key /etc/h2o/edwardkenfoxcom.key
COPY h2o-mruby-handler.rb /etc/h2o/h2o-mruby-handler.rb
COPY response-headers-requester.rb /etc/h2o/response-headers-requester.rb

# #
# # build static files with hugo
# #
COPY /src /app/
RUN cd /app && \
    hugo

# #
# # run h2o
# #
EXPOSE 80 443
CMD h2o -c /etc/h2o/h2o.conf
