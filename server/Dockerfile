FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Nodemon kullanarak başlat
CMD ["npm", "run", "dev"]
EXPOSE 3000