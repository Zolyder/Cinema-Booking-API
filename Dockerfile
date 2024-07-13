# Use an official Node.js image as a base
FROM node:14

# Install netcat
RUN apt-get update && apt-get install -y netcat

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port your application uses
EXPOSE 8080

# Command to run the application
CMD ["npm", "start"]
