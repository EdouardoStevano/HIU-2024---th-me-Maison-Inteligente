FROM node:21-alpine as builder
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN yarn install
COPY . .
COPY .env.example .env
RUN yarn run build


FROM nginx:1.21-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]