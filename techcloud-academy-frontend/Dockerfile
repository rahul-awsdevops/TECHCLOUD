# Stage 1: Build
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
ENV NGINX_PORT=80
ENV API_BACKEND_URL=my-backend-service
# Copy Nginx template
COPY nginx/templates /etc/nginx/templates/
COPY --from=build /app/build /usr/share/nginx/html
# Expose Nginx port
EXPOSE ${NGINX_PORT}
CMD ["nginx", "-g", "daemon off;"]
