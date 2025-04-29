# Step 1: Use official Node.js image as a base
FROM node:18

# Step 2: Set the working directory
WORKDIR /app  # This is where the app will reside in the container

# Step 3: Copy package.json and package-lock.json from the root directory (outside src)
COPY ../package*.json ./  # Copy package.json and package-lock.json to the container

# Step 4: Install dependencies
RUN npm install -y  # Install dependencies from package.json

# Step 5: Copy the rest of the source files
COPY . .  # Copy the rest of the files inside src into /app in the container

# Step 6: Expose the port that the app will run on (optional)
EXPOSE 3000  # Update port if necessary

# Step 7: Run the application in development mode
CMD ["npm", "run", "dev", "--", "--host"]
