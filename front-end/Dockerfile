#Specify a base image
FROM node:alpine

#Specify a working directory
WORKDIR /usr/app/front-end

#Copy the dependencies file
COPY ./package.json ./

#Install dependencies
RUN npm install 

#Copy remaining files
COPY ./ ./

# EXPOSE 3001

#Default command
CMD ["npm","start"]
