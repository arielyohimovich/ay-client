# Stage 1: Build the frontend app
FROM node:20 AS build

WORKDIR /app

COPY ay-client/package*.json ./
RUN npm install

COPY ay-client/ ./
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the build files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port Nginx listens on
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
