FROM debian:jessie

# RUN apt-get update && apt-get install -y ca-certificates git openssl build-essential cmake libssl-dev libyaml-dev \
#   --no-install-recommends \
#   && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y vim ca-certificates git openssl build-essential cmake libssl-dev libyaml-dev \
  --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

RUN git clone -q https://github.com/h2o/h2o.git --depth 1

WORKDIR /h2o

RUN git submodule update --init --recursive && \
    cmake . && \
    make h2o

RUN chmod 777 /h2o && mkdir /app

COPY h2o.conf /h2o/h2o.conf
COPY /src/public /app

EXPOSE 8080

CMD ./h2o -c /h2o/h2o.conf
