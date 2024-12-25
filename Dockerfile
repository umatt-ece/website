# Stage 1: Build the application
FROM node:18 AS builder
WORKDIR /app

# Copy package.json and lock file, then install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files and build the app
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.25
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
