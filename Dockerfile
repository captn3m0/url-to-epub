FROM node:10-slim

VOLUME /data

COPY . /app

WORKDIR /app

RUN npm ci && npm link

RUN apt-get update && apt-get install --yes pandoc

ENTRYPOINT ["/usr/local/bin/url-to-epub"]