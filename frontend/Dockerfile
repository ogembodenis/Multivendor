# Use the official Node.js image
FROM node:18-alpine as build

# Set the working directory inside the container
WORKDIR /usr

# Copy Package Json Files
COPY package*.json ./

# Install both production and development dependencies (including vite)
RUN yarn

# Copy source files
COPY . .

# ENV VITE_REACT_APP_GOLDENGOOSE_API_URL=https://ggportal.mobipoll.co.ke

# Start the application using the production server
RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf