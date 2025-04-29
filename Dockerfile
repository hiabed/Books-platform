# Step 1: Use official Node.js image as a base
FROM node:18

# Step 2: Set the working directory
WORKDIR /usr/src/app

# Step 3: Copy the package.json and package-lock.json files
COPY ./package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Expose the port that the app will run on
EXPOSE 5000

# Step 7: Run the application
CMD ["npm", "start"]
