FROM mhart/alpine-node:10.15.3
ENV PROJECT_ROOT /opt/app
RUN apk add bash
RUN npm config set unsafe-perm true \
    && npm i -g nodemon \
    && npm config set unsafe-perm false
WORKDIR /tmp/app
COPY package.json package-lock.json* /tmp/app/
RUN npm i
COPY start /
RUN chmod +x /start
WORKDIR $PROJECT_ROOT
ENTRYPOINT ["/start"]
