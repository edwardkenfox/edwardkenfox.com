FROM debian:jessie

#
# install necessary packages
#
RUN apt-get update && \
    apt-get install -y \
    vim \
    wget \
    ca-certificates \
    git \
    openssl \
    build-essential \
    cmake \
    libssl-dev \
    libyaml-dev \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

#
# setup hugo
#
ENV HUGO_VERSION=0.18.1
RUN cd /tmp/ && \
    wget https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    tar xzf hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    rm -r hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    mv hugo*/hugo* /usr/bin/hugo

#
# setup h2o
#
RUN git clone -q https://github.com/h2o/h2o.git --depth 1
WORKDIR /h2o
RUN git submodule update --init --recursive && \
    cmake . && \
    make h2o && \
    chmod 777 /h2o && \
    mkdir /app
COPY h2o.conf /h2o/h2o.conf

#
# build static files with hugo
#
COPY /src /app/
RUN cd /app && \
    hugo


#
# run h2o
#
EXPOSE 80 443
CMD ./h2o -c /h2o/h2o.conf
