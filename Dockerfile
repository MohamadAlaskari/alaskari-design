# Use the official Node.js image as the base image
FROM node:22.5.1 AS build

# Create and change to the app directory
WORKDIR /app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local code to the container image.
COPY . .

# Build the Angular app
RUN npm run build -- --configuration production

# Use a web server to serve the built files
FROM nginx:alpine
COPY --from=build /app/dist/ /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
