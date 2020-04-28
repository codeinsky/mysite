FROM node:12.0.0-alpine AS builder 
COPY . ./test-application 
WORKDIR /test-application
RUN npm i 
RUN $(npm bin)/ng build --prod 

FROM nginx:1.15.8-alpine
COPY --from=builder /test-application/dist/MySite/ /usr/share/nginx/html

