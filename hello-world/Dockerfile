FROM node:8.9-alpine as node-angular-cli

LABEL authors="John Papa"

#Linux setup
RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd


RUN addgroup angular 
RUN adduser angular -G angular -D 
 

#Angular CLI
RUN npm install -g @angular/cli

RUN mkdir app
RUN chown -R angular:angular /app
RUN chmod 755 /app
USER angular

VOLUME ["/app","/dist"]

EXPOSE 4200

WORKDIR /app

# docker-compose run --rm --user=root -p 4200:4200 docker-angular-cli ng serve -H 0.0.0.0