#  Dockerfile for Node Express Backend
FROM node:lts-alpine

# Create App Directory
WORKDIR /app/server

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 5000

CMD ["npm", "run", "prod"]