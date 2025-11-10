#  Dockerfile for React client

FROM node:lts-alpine

# Create App Directory
WORKDIR /app/server

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 3000

CMD ["npm","start"]