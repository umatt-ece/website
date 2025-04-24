### Stage 1: Build the Vue app
FROM node:slim AS builder

# Set working directory
WORKDIR /app

# Install dependencies (leverage Docker cache)
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build


### Stage 2: Serve with Nginx
FROM nginx:alpine AS web

# Copy built assets into Nginx web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Drop custom vhost into conf.d so Nginx picks it up automatically
COPY ./nginx/umatt.org.conf /etc/nginx/conf.d/umatt.org.conf

# Expose HTTP port
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
