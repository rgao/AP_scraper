# Use an official Node.js runtime as a parent image
FROM node:lts-alpine 

# Set the working directory in the container
WORKDIR /app/client

# Install app dependencies
COPY package*.json ./

#  Install Dependencies
RUN npm install --silent

#  Copy app source code
COPY . .

# Build the React app for production
RUN npm run build

# Install a simple static server to serve the React build
RUN npm install -g serve 

# Exports
EXPOSE 3000

# Start the static server to serve the build folder
CMD ["serve", "-s", "build", "-l", "3000"]