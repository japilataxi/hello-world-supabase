# Use a simple web server to serve static files
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install a lightweight web server
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Run the app
CMD ["serve", ".", "-l", "3000"]
