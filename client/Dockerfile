# Dev-friendly Dockerfile
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies first (this helps cache them)
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Start React app (hot reload enabled)
CMD ["npm", "start"]
